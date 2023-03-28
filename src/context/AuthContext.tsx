import React, { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { API_URL } from '../settings/constant';
import axios from 'axios';
import { type Props } from '../@types/children';
import { type Actions } from '../@types/actions';

const AuthContext = createContext<Actions | null>(null);

export default AuthContext;

export const AuthProvider: React.FC<Props> = ({ children }) => {
	const [userTokens, setAuthTokens] = useState(() =>
		localStorage.getItem('userTokens') != null
			? JSON.parse(localStorage.getItem('userTokens') as string)
			: null
	);
	const [user, setUser] = useState(() =>
		localStorage.getItem('userTokens') != null
			? jwt_decode(localStorage.getItem('userTokens') as string)
			: null
	);

	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const [loading, setLoading] = useState(true);

	const loginUser = async (
		email: string,
		password: string,
		isDone: (x: boolean) => void
	): Promise<any> => {
		await axios
			.post(
				`${API_URL}accounts/login`,
				{
					email,
					password,
				},
				config
			)
			.then((response) => {
				const data = response.data;
				alert(`res ${response.statusText}`);
				if (response.status === 200) {
					console.log(jwt_decode(data.access));
					setAuthTokens(data);
					setUser(jwt_decode(data.access));
					localStorage.setItem('userTokens', JSON.stringify(data));
					window.location.href = '/';
				} else {
					isDone(true);
					alert('Something went wrong!');
				}
			});
	};

	const registerUser = async (
		firstname: string,
		lastname: string,
		country: string,
		phone: string,
		email: string,
		password: string,
		isDone: (x: boolean) => void
	): Promise<any> => {
		const response = await axios.post(
			`${API_URL}accounts/register`,
			{
				firstname,
				lastname,
				country,
				phone,
				email,
				password,
			},
			config
		);

		console.log(response);
		if (response.status === 201) {
			window.location.href = '/';
		} else {
			isDone(true);
			alert('Something went wrong!');
		}
	};

	const logoutUser = (): void => {
		setAuthTokens(null);
		setUser(null);
		localStorage.removeItem('userTokens');
		window.location.href = '/';
	};

	const contextData = {
		user,
		setUser,
		userTokens,
		setAuthTokens,
		registerUser,
		loginUser,
		logoutUser,
	};

	useEffect(() => {
		if (userTokens !== null) {
			setUser(jwt_decode(userTokens.access));
		}
		setLoading(false);
	}, [userTokens, loading]);

	return (
		<AuthContext.Provider value={contextData}>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
