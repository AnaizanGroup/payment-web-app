/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
	FaFacebookF,
	FaInstagram,
	FaPinterest,
	FaYoutube,
} from 'react-icons/fa';
import { HOME_PAGE, SHOP_HOME } from '../../../settings/constant';
import Auth from '../../authForms/Auth';
// import BoxAccount from '../../boxAccount/BoxAccount';

import '../Header.scss';

interface Props {
	children: React.ReactNode;
}

export const TopBar: React.FC<Props> = ({ children }) => {
	const [part, isPart] = useState(false);
	const [openAuth, setOpenAuth] = useState(false);
	const [openForm, setOpenForm] = useState(0);

	// const openForms = (form: number, auth: boolean):void => {
	// 	setOpenForm(form);
	// 	setOpenAuth(auth);
	// };

	useEffect(() => {
		const path = window.location.pathname.split('/')[1];
		if (path === SHOP_HOME.split('/')[1]) {
			isPart(true);
		}
	});

	const renders = (): JSX.Element => {
		if (!part) {
			return (
				<>
					<li>
						<a href={HOME_PAGE}>Accueil</a>
					</li>
					<li>
						<a href="">Comment créer mon boutique ?</a>
					</li>
				</>
			);
		}
		return <></>;
	};
	return (
		<>
			<div className="head-div1">
				{openAuth ? <Auth formAuth={openForm} openAuth={setOpenAuth} /> : ''}
				<ul>{renders()}</ul>
				<ul>
					<div></div>
					<li className="user-account">
						<a href=""> Mon compte</a>
						{/* <BoxAccount openAuth={openForms} /> */}
					</li>
					<div></div>
					<li>
						<a href="">
							<FaFacebookF />
						</a>
					</li>
					<div></div>
					<li>
						<a href="">
							{' '}
							<FaPinterest />{' '}
						</a>
					</li>
					<div></div>
					<li>
						<a href="">
							{' '}
							<FaInstagram />{' '}
						</a>
					</li>
					<div></div>
					<li>
						<a href="">
							{' '}
							<FaYoutube />{' '}
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};
