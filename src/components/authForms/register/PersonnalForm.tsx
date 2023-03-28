import React, { useEffect, useState } from 'react';
import { ControlField } from '../../controlField/ControlField';
import { countries } from '../../countrylist/countrylist';
import SelectCountryField from '../../selectCountryField/SelectCountryField';
import { ShowPasswdText } from '../../showPasswdText/ShowPasswdText';
import ChoiceContact from './ChoiceContact';

const PersonnalForm: React.FC = () => {
	const [option, setOption] = useState(0);

	const [value, setValue] = useState({
		firstname: '',
		lastname: '',
		country: '',
		telephone: '',
		email: '',
		password: '',
		passwordC: '',
	});

	const [country, setCountry] = useState('');

	const [dialCode, setDialCode] = useState('');

	// const active:any = {
	// 	background: 'var(--orange-400)',
	// 	color: 'var(--white-500)',
	// };

	const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
		setValue({
			...value,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const handleSubmit = (e: React.FormEvent<any>): void => {
		e.preventDefault();

		if (
			(ControlField(value.firstname, 'firstname-error', 'text') ?? false) &&
			(ControlField(value.lastname, 'lastname-error', 'text') ?? false) &&
			ControlField(value.telephone, 'tel-error', 'tel') &&
			(ControlField(value.email, 'email-error', 'email') ?? false) &&
			(ControlField(value.password, 'pwd-error', 'pwd') ?? false)
		) {
			if (value.passwordC !== value.password) {
				const pwdC: any = document.getElementById('pwdC-error');
				pwdC.innerText = 'Mot de passe incorrect';
			}
		}
	};

	useEffect(() => {
		const find = countries.find((item) => item.name === country);
		if (find != null) {
			setDialCode(find.dial_code);
		}
	}, [country]);

	return (
		<form>
			<h2> Sign up </h2>
			<ChoiceContact option={option} setOption={setOption} />
			<div className="div-field">
				<label>Country</label>
				<SelectCountryField setCountry={setCountry} />
			</div>

			<div className="div-field">
				{option === 0 ? (
					<>
						<label>Email</label>
						<input
							type="email"
							placeholder="..."
							name="email"
							value={value.email}
							onChange={handleChange}
							onKeyUp={() => {
								ControlField(value.email, 'email-error', 'email');
							}}
						/>
						<span className="span" id="email-error"></span>
					</>
				) : (
					<>
						<label>Phone Number</label>
						<span className="span" id="tel-error"></span>
						<div className="phones">
							<p> {dialCode} </p>
							<input
								type="tel"
								placeholder="..."
								name="telephone"
								value={value.telephone}
								onChange={handleChange}
								onKeyUp={() => {
									ControlField(value.telephone, 'tel-error', 'tel');
								}}
							/>
						</div>
					</>
				)}
			</div>
			<div className="div-field">
				<label> Full Name</label>
				<div className="groups-field">
					<input
						type="text"
						placeholder="..."
						name="firstname"
						value={value.firstname}
						onChange={handleChange}
						onKeyUp={() => {
							ControlField(value.firstname, 'firstname-error', 'text');
						}}
					/>
					<span className="span" id="firstname-error"></span>
				</div>
			</div>
			<div className="div-field">
				<label>Password</label>

				<input
					type="password"
					placeholder="..."
					name="password"
					id="password"
					value={value.password}
					onChange={handleChange}
					onKeyUp={() => {
						ControlField(value.password, 'pwd-error', 'pwd');
					}}
				/>
				<ShowPasswdText id="password" type={''} />
				<span className="span" id="pwd-error"></span>
			</div>
			<p className="p-checks">
				<input type="checkbox" />
				<span>
					I have read and agree <a href="">Terms of Services</a>
					and <a href="">Privacy Policy </a>
				</span>
			</p>
			<div className="btn-submit">
				<button onClick={handleSubmit} type="submit">
					Create Personnal account
				</button>
			</div>
		</form>
	);
};

export default PersonnalForm;
