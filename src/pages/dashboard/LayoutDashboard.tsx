/* eslint-disable react/no-unescaped-entities */
import React, { type ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import { FaBell, FaHamburger, FaSearch, FaUserCircle } from 'react-icons/fa';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

import './LayoutDashboard.scss';

import logo from '../../assets/images/svg/logo.svg';

import {
	DASHBOARD_CRYPTO,
	DASHBOARD_DEPOSIT,
	DASHBOARD_EXCHANGE,
	DASHBOARD_HELP,
	DASHBOARD_INVEST,
	DASHBOARD_PAYMENT,
	DASHBOARD_SETTINGS,
	DASHBOARD_TRANSACTION,
	DASHBOARD_WITHDRAW,
} from '../../settings/constant';
import transaction from '../../assets/images/svg/arrow-left-right-line.svg';
import bit_coin from '../../assets/images/svg/bit-coin-line.svg';
import hand_coin from '../../assets/images/svg/hand-coin-line.svg';
import coins_line from '../../assets/images/svg/coins-line.svg';
import pulse from '../../assets/images/svg/pulse-line.svg';
import question from '../../assets/images/svg/question-line.svg';
import scales from '../../assets/images/svg/scales-line.svg';
import setting from '../../assets/images/svg/settings-5-line.svg';
import wallet from '../../assets/images/svg/wallet-line.svg';
import Toggle from '../../components/toggle/Toggle';
import Select from '../../components/select/Select';
import { country } from '../../components/currencyList/countries';

interface Props {
	children: ReactNode;
}

const LayoutDashboard: React.FC<Props> = ({ children }) => {
	const [codeCountry, setCodeCountry] = useState('');
	const [countrys, setCountrys] = useState('');
	const [current, setCurrent] = useState('');
	const [city, setCity] = useState('');

	const locales = [{ label: 'English' }, { label: 'French' }];

	const menu = [
		{
			label: 'Transactions',
			url: DASHBOARD_TRANSACTION,
			icon: transaction,
		},
		{
			label: 'Deposit',
			url: DASHBOARD_DEPOSIT,
			icon: pulse,
		},
		{
			label: 'Payment',
			url: DASHBOARD_PAYMENT,
			icon: bit_coin,
		},
		{
			label: 'Withdraw',
			url: DASHBOARD_WITHDRAW,
			icon: wallet,
			submenu: [],
		},
		{
			label: 'Invest',
			url: DASHBOARD_INVEST,
			icon: hand_coin,
		},
		{
			label: 'Crypto',
			url: DASHBOARD_CRYPTO,
			icon: coins_line,
		},
		{
			label: 'Exchange',
			url: DASHBOARD_EXCHANGE,
			icon: scales,
		},
		{
			label: 'Settings',
			url: DASHBOARD_SETTINGS,
			icon: setting,
		},
		{
			label: 'Help',
			url: DASHBOARD_HELP,
			icon: question,
		},
	];

	const navigateUrl = (url: string, index: string): void => {
		window.location.href = url;
		sessionStorage.setItem('menuId', index);

		const allLink = document.querySelectorAll('.link-p');

		for (let i = 0; i < allLink.length; i++) {
			allLink[i].classList.remove('active-menu');
		}
		const menuId = Number(sessionStorage.getItem('menuId'));

		allLink[menuId].classList.add('active-menu');
	};

	// get localisation
	const getDataLocation = async (): Promise<any> => {
		const res = await axios.get('https://geolocation-db.com/json/');
		console.log(res.data);

		const countri = res.data.country_name;
		const currency: any = country.find((item) => item.countryName === countri);

		setCurrent(currency.currencyCode);

		setCodeCountry(res.data.country_code.toLowerCase());
		setCountrys(res.data.country_name);
		setCity(res.data.city);

		sessionStorage.setItem('code_country', codeCountry);
		sessionStorage.setItem('country', countrys);
		sessionStorage.setItem('city', city);
		sessionStorage.setItem('currency', current);
	};

	useEffect(() => {
		// passing getData method to the lifecycle method
		void getDataLocation();
	});

	return (
		<div className="dashboard-seller-home">
			<div className="main">
				<div className="main-center">
					<div className="nav-bar">
						<div className="logo z-index">
							<img src={logo} />
						</div>
						<div className="title-dash">
							<FaHamburger />
							Dashboard
						</div>
						<div className="nav z-index">
							{menu.map(({ label, url, icon, submenu }, index: number) => {
								return (
									<div className="nav-ul" key={index}>
										<p
											onClick={() => {
												navigateUrl(url, String(index));
											}}
											className="link-p"
										>
											<span>
												{' '}
												<img src={icon} /> {label}{' '}
											</span>
											{submenu != null ? <FiChevronRight /> : null}
										</p>
										{submenu != null && (
											<div className="sub-ul">
												{submenu.map((list: any, index2: number) => {
													return (
														<li
															onClick={() => {
																navigateUrl(list.url2, String(index2));
															}}
															key={index2}
														>
															{list.label2}
														</li>
													);
												})}
											</div>
										)}
									</div>
								);
							})}
						</div>
					</div>

					<div className="body">
						<div className="content-body">
							<div className="head">
								<div className="hdd">
									<h3>YOU'RE TEST MODE</h3>
									<Toggle />
								</div>
								<div className="right-head">
									<p>
										<span>Language:</span>
										<Select defaultText={'English'} listOption={locales} />
									</p>
									<li>
										{' '}
										<FaSearch />{' '}
									</li>
									<li>
										{' '}
										<FaBell />{' '}
									</li>
									<div className="profil">
										<FaUserCircle />
										<FiChevronDown />
									</div>
								</div>
							</div>

							<div className="block-content">{children}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LayoutDashboard;
