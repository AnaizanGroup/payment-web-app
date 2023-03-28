/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import {} from 'react-icons/fi';
import { FaEnvelopeSquare } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AuthContext from '../../../context/AuthContext';
import { REGISTER, RESETFORM } from '../../../settings/constant';
import BoxAccount from '../../boxAccount/BoxAccount';
import { ControlField } from '../../controlField/ControlField';
import { PopupLayout } from '../../popupLayout/PopupLayout';
import Auth from '../Auth';

import '../auth.scss';

import qr from '../../../assets/images/png/qr.png';
import slide1 from '../../../assets/images/png/slide1.png';
import slide2 from '../../../assets/images/png/slide2.png';
import slide3 from '../../../assets/images/png/slide3.png';

import { ShowPasswdText } from '../../showPasswdText/ShowPasswdText';

import { type Actions } from '../../../@types/actions';

interface Props {
	setForm: (arg: any) => void;
}

const Login: React.FC<Props> = ({ setForm }) => {
	const { loginUser } = useContext(AuthContext) as Actions;

	const [popup, isPopup] = useState(false);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [done, isDone] = useState(false);

	const [value, setValue] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
		setValue({
			...value,
			[e.currentTarget.name]: e.currentTarget.value,
		});
	};

	const handleSubmit = (e: React.FormEvent): void => {
		e.preventDefault();

		if (ControlField(value.email, 'email-error', 'email')) {
			const email = value.email;
			const password = value.password;
			loginUser(email, password, isDone);
		}
	};

	const settings = {
		dots: true,
		infinite: true,
		autoplaySpeed: 2000,
		slidesToScroll: 1,
		slidesToShow: 1,
		autoplay: true,
		arrows: false,
	};

	return (
		<Auth>
			<PopupLayout closes={popup}>
				<form>
					<span
						className="close-form"
						onClick={() => {
							isPopup(false);
						}}
					>
						&times;
					</span>
					<h2>Sign in</h2>
					<div className="div-field">
						<input
							type="email"
							placeholder="Email or Phone Number"
							name="email"
							value={value.email}
							onChange={handleChange}
							onKeyUp={() => {
								ControlField(value.email, 'email-error', 'email');
							}}
						/>
						<FaEnvelopeSquare />
						<span className="span" id="email-error"></span>
					</div>
					<div className="div-field">
						<input
							type="password"
							placeholder="Password"
							name="password"
							id="password"
							value={value.password}
							onChange={handleChange}
						/>
						<ShowPasswdText id={'password'} type={''} />
						<span className="span" id="pwd-error"></span>
					</div>
					<div className="btn-submit">
						<button type="submit" onClick={handleSubmit}>
							Connexion
						</button>
					</div>
					<a className="link-reset-pas" href={RESETFORM}>
						Forgat password ?
					</a>
					<div className="end-div">
						<p>Don't an account ?</p>
						<li> Create an account </li>
					</div>
				</form>
			</PopupLayout>
			<div className="slide">
				<Slider {...settings}>
					<div className="div">
						<img src={slide1} />
						<h5> Transfer money Fast & secure </h5>
						<p>
							Publish up your selfies to make yourself more beautiful with this
							app.
						</p>
					</div>
					<div className="div">
						<img src={slide2} />
						<h5> All Types Offers Within Your Reach </h5>
						<p>
							Publish up your selfies to make yourself more beautiful with this
							app.
						</p>
					</div>
					<div className="div">
						<img src={slide3} />
						<h5> All Types Offers Within Your Reach </h5>
						<p>
							Publish up your selfies to make yourself more beautiful with this
							app.
						</p>
					</div>
				</Slider>
			</div>

			<div className="div-right-connect">
				<img className="qr" src={qr} />
				<h4> Login in with qr code </h4>
				<p>
					Scan this code with <span>mobile app</span>
					&nbsp;to login instanly
				</p>
				<div className="bars">
					<div></div>
					<span> Login with </span>
					<div></div>
				</div>
				<button
					className="btn-click-connect"
					onClick={() => {
						isPopup(true);
					}}
				>
					{/*  <li> <img src={user_icon} /> </li> */}
					Sign in whith phone or email
				</button>
				<BoxAccount openAuth={undefined} />
				<p>
					Don't have an account ?<a href={REGISTER}>Sign up</a>
				</p>
			</div>
		</Auth>
	);
};

export default Login;
