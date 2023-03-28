import React, { useState } from 'react';

import { FaPrint, FaSearch } from 'react-icons/fa';
import './SearchBar.scss';
import { type AnyAction } from '@reduxjs/toolkit';

const SearchBar: React.FC<AnyAction> = ({
	placeholderText,
	setWord,
	searchWord,
	allList,
	setList,
	handlePrint,
}) => {
	const [keyword, setKeyword] = useState('');

	const handleChange = (e: React.FocusEvent<HTMLInputElement>): void => {
		setKeyword(e.currentTarget.value);
	};

	const key = (): void => {
		if (keyword.length > 0) {
			setWord(keyword);
		}
	};

	return (
		<>
			<div className="searchbar">
				<p>
					<button className="btn_print" onClick={handlePrint}>
						{' '}
						<FaPrint /> Imprimer{' '}
					</button>
				</p>
				<div className="bar">
					<FaSearch />
					<input
						type="text"
						name="keyword"
						placeholder={placeholderText}
						value={keyword}
						onChange={handleChange}
						onKeyUp={key}
					/>
				</div>
			</div>
		</>
	);
};

export default SearchBar;
