import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Select from '../select/Select';

import './SortList.scss';

export const SortList: React.FC = () => {
	const listOption1 = [
		{ label: 'Tout', value: '' },
		{ label: 'Les plus vendus', value: '' },
		{ label: 'Moins chère', value: '' },
		{ label: 'En promotion', value: '' },
	];

	const listOption2 = [
		{ label: 'Tout', value: '' },
		{ label: 'Homme', value: '' },
		{ label: 'Femme', value: '' },
		{ label: 'Enfant', value: '' },
	];

	const listOptionTaille = [
		{ label: 'Tout', value: '' },
		{ label: 'SM', value: '' },
		{ label: 'M', value: '' },
		{ label: 'X', value: '' },
		{ label: 'Xl', value: '' },
		{ label: 'lg', value: '' },
	];

	return (
		<>
			<div className="sort-lists">
				<Select listOption={listOption1} defaultText={'Trier par'} id={1} />

				<Select listOption={listOption2} defaultText={'Homme'} id={2} />
				<Select listOption={listOptionTaille} defaultText={'Taille'} id={3} />
				<div className="sort-price">
					<span>price</span>
					<input type="text" placeholder="Min_" />
					<span>
						{' '}
						<FiChevronLeft /> <FiChevronRight />{' '}
					</span>
					<input type="text" placeholder="Max_" />
				</div>
			</div>
		</>
	);
};
