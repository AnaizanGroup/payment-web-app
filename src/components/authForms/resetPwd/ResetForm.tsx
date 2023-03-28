import React, { useState } from 'react';

import { ControlField } from '../../controlField/ControlField';
import { ShowPasswdText } from '../../showPasswdText/ShowPasswdText';
import { Spinner } from '../../spinner/Spinner';
import Auth from '../Auth';

import '../auth.scss';

const ResetForm: React.FC = () => {
	const [reset] = useState(false);

	const [value, setValue] = useState({
		password: '',
		passwordC: '',
	});

	const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
		setValue({
			...value,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const handleSubmit = (e: React.FormEvent<any>): void => {
		e.preventDefault();

		if (ControlField(value.password, 'pwd-error', 'pwd') ?? false) {
			if (value.passwordC !== value.password) {
				const pwdC: any = document.getElementById('pwdC-error');
				pwdC.innerText = 'Mot de passe incorrect';
			}
		}
	};

	return (
		<Auth>
			{reset ? (
				<Spinner />
			) : (
				<form>
					<h3 className="title-reset-pwd" style={{ marginBottom: '1.5rem' }}>
						Create a new Password
					</h3>
					<div className="div-field">
						<input
							type="password"
							placeholder="New Password..."
							name="password"
							id="password"
							value={value.password}
							onChange={handleChange}
							onKeyUp={() => {
								ControlField(value.password, 'pwd-error', 'pwd');
							}}
						/>
						<ShowPasswdText id={'pwd-error'} type={''} />
						<span className="span" id="pwd-error"></span>
					</div>
					<div className="div-field">
						<input
							type="password"
							placeholder="Re-enter your password..."
							name="passwordC"
							value={value.passwordC}
							onChange={handleChange}
							onKeyUp={() => {
								ControlField(value.passwordC, 'pwdC-error', 'pwd');
							}}
						/>
						<span className="span" id="pwdC-error"></span>
					</div>
					<div className="btn-submit">
						<button onClick={handleSubmit} type="submit">
							Réinitialiser
						</button>
					</div>
				</form>
			)}
		</Auth>
	);
};

export default ResetForm;
