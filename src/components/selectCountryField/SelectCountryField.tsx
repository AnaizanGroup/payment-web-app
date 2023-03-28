/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { countries } from '../countrylist/countrylist';
import { country } from '../currencyList/countries';

import './SelectCountryField.scss';

interface Currency {
	countryCode?: string;
	countryName?: string;
	currencyCode?: string;
	population?: string;
	capital?: string;
	continentName?: string;
}

const SelectCountryField: React.FC<{ setCountry: (args: any) => void }> = ({
	setCountry,
}) => {
	const [countrys, setCountrys] = useState(sessionStorage.getItem('country'));

	const [code, setCode] = useState(sessionStorage.getItem('code_country'));

	const selectedCountry = (id: number, name: string, code: string): void => {
		setCountrys(name);
		setCode(code.toLowerCase());
		sessionStorage.setItem('country', name);
		sessionStorage.setItem('code_country', code.toLowerCase());

		console.log(name);
		const currency: any = country.find((item) => item.countryName === name);
		const dial = countries.find((item) => (item.name = name));
		setCountry(name);
		sessionStorage.setItem('currency', currency.currencyCode);
		sessionStorage.setItem('code_country', currency.countryCode.toLowerCase());
	};

	useEffect(() => {});

	return (
		<ul className="select-country">
			<li className="selected">
				<div className="selected-item-options">
					<i className={`flag-icon flag-icon-${code}`}></i>
					<span> {countrys} </span>
				</div>
				<FiChevronDown className="arrow" />
			</li>
			<ul className="options-select">
				{countries.map((list, index) => {
					return (
						<li
							className="option"
							onClick={() => {
								selectedCountry(index, list.name, list.code);
							}}
							key={index}
						>
							<i
								className={`flag-icon flag-icon-${list.code.toLowerCase()}`}
							></i>
							<span> {list.name} </span>
						</li>
					);
				})}
			</ul>
		</ul>
	);
};

export default SelectCountryField;
