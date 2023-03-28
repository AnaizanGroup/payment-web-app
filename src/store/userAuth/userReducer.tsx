import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '../../settings/constant';

const config = {
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
};

interface UserRegister {
	firstname: string;
	lastname: string;
	country: string;
	telephone: string;
	email: string;
	password: string;
	isDone: (arg: boolean) => void;
}

/* register */
export const userRegister = createAsyncThunk(
	'user/register',
	async (
		{
			firstname,
			lastname,
			country,
			telephone,
			email,
			password,
			isDone,
		}: UserRegister,
		{ rejectedWithValue }: any
	) => {
		try {
			const { data } = await axios.post(
				`${API_URL}accounts/register`,
				{
					firstname: 'MaxGeeks',
					lastname: 'Luciano',
					country: 'Benin',
					phone: '+2299392992',
					email: 'ttot@gmail.com',
					password: '123455',
				},
				config
			);

			console.log(data);
			return data;
		} catch (error) {
			console.log(error);
			return rejectedWithValue(error);
		}
	}
);

/* login */
export const userLogin = createAsyncThunk(
	'user/login',
	async ({ email, password }: any, { rejectedWithValue }: any) => {
		try {
			const { data } = await axios.post(
				`${API_URL}login`,
				{
					email,
					password,
				},
				config
			);

			return data;
		} catch (error) {
			console.log(error);
			return rejectedWithValue(error);
		}
	}
);

/* send email reset password */
export const sendEmail = createAsyncThunk(
	'user/sendEmail',
	async ({ email }: any, { rejectedWithValue }: any) => {
		try {
			const data = await axios.post(
				`${API_URL}sendEmailReset`,
				{ email },
				config
			);

			return data;
		} catch (error) {
			console.log(error);
			return rejectedWithValue(error);
		}
	}
);

/* reset password */
export const resetPwd = createAsyncThunk(
	'user/resetPassword',
	async ({ email, password }: any, { rejectWithValue }) => {
		try {
			const { data } = await axios.post(
				`${API_URL}resetPassword`,
				{
					password,
					email,
				},
				config
			);

			return data;
		} catch (error) {
			console.log(error);
			return rejectWithValue(error);
		}
	}
);
