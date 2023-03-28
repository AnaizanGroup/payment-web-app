/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';

import { FaPrint, FaSearch } from 'react-icons/fa';
import SearchBarStyle from './searchBar2.scss';

interface Props {
	placeholderText: string;
	setValue: (args: any) => void;
	searchUser: (args: any) => void;
}

const SearchBar: React.FC<Props> = ({
	placeholderText,
	setValue,
	searchUser,
}) => {
	const [keyword] = useState({ value: '' });

	const handleChange = (): void => {
		searchUser(keyword.value);
	};
	return (
		<>
			<div className={SearchBarStyle.searchbar}>
				<button className={SearchBarStyle.btn_print}>
					{' '}
					<FaPrint /> Print{' '}
				</button>
				<div className={SearchBarStyle.bar}>
					<FaSearch />
					<input
						type="text"
						name="keyword"
						value={keyword.value}
						onChange={(e) => {
							setValue(e.target.value);
						}}
						placeholder={placeholderText}
					/>
				</div>
			</div>
		</>
	);
};

export default SearchBar;
