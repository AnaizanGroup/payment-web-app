import React, { useEffect, useState } from 'react';

import { countries } from '../../countrylist/countrylist';

import '../auth.scss';
import Auth from '../Auth';
import BoxAccount from '../../boxAccount/BoxAccount';
import PersonnalForm from './PersonnalForm';
import ProfessionnalForm from './ProfessionnalForm';

const Register: React.FC = () => {
	const [typeAccount, setTypeAccount] = useState(0);

	const active = {
		background: 'var(--orange-400)',
		color: 'var(--white-500)',
	};
	// const [value, setValue] = useState({
	// 	firstname: '',
	// 	lastname: '',
	// 	country: '',
	// 	telephone: '',
	// 	email: '',
	// 	password: '',
	// 	passwordC: '',
	// });

	const [dialCode, setDialCode] = useState(sessionStorage.getItem('dial_code'));

	// const handleChange = (e:React.FormEvent<HTMLInputElement>):void => {
	// 	setValue({
	// 		...value,
	// 		[e.currentTarget.name]: e.currentTarget.value,
	// 	});
	// };

	// const handleSubmit = (e:React.FormEvent<any>):void => {
	// 	e.preventDefault();

	// 	if (
	// 		(ControlField(value.firstname, 'firstname-error', 'text') ?? false) &&
	// 		(ControlField(value.lastname, 'lastname-error', 'text') ?? false) &&
	// 		(ControlField(value.telephone, 'tel-error', 'tel') ?? false) &&
	// 		(ControlField(value.email, 'email-error', 'email') ?? false) &&
	// 		(ControlField(value.password, 'pwd-error', 'pwd') ?? false)
	// 	) {
	// 		if (value.passwordC !== value.password) {
	// 			const pwdC: any = document.getElementById('pwdC-error');
	// 			pwdC.innerText = 'Mot de passe incorrect';
	// 		}
	// 	}
	// };

	const defineDialCodeCountry = (): void => {
		const country = sessionStorage.getItem('country');
		const find = countries.find((item) => item.name === country);
		if (find != null) {
			sessionStorage.setItem('dial_code', find.dial_code);
			setDialCode(find.dial_code);
		}
	};

	useEffect(() => {
		setInterval(() => {
			defineDialCodeCountry();
		}, 1000);
	}, [dialCode]);

	return (
		<Auth>
			<div className="choice-type-account">
				<h1> Create account </h1>
				<p> Select type of account </p>
				<div className="btn-group">
					<button
						style={typeAccount === 0 ? active : undefined}
						onClick={() => {
							setTypeAccount(0);
						}}
					>
						Personnal
					</button>
					<button
						style={typeAccount === 1 ? active : undefined}
						onClick={() => {
							setTypeAccount(1);
						}}
					>
						Professionnal
					</button>
				</div>
				<div className="auth-sociaux">
					<BoxAccount openAuth={undefined} />
				</div>
			</div>
			{typeAccount === 0 ? <PersonnalForm /> : <ProfessionnalForm />}
		</Auth>
	);
};

export default Register;
