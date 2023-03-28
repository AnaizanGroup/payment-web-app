import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { VscListSelection } from 'react-icons/vsc';

import './DropCategorie.scss';

interface Props {
	listCategorie: [];
	link: string;
	nb: number;
}

const DropCategorie: React.FC<Props> = ({ listCategorie, link, nb }) => {
	const goCategorieProductPage = (nameCat: string, index: any): void => {
		sessionStorage.setItem('nameCat', nameCat);
		sessionStorage.setItem('indexCat', index);
		window.location.href = `${link}${nameCat}${nb === 1 ? '/:id' : 0}`;
	};

	return (
		<li className="li-drop-cat">
			<VscListSelection />
			Catégories <FiChevronDown />
			<li className="box-categorie">
				{listCategorie?.map(({ nameCat }: any, index: number) => {
					return (
						<li
							key={index}
							onClick={() => {
								goCategorieProductPage(nameCat, index);
							}}
						>
							{nameCat}
						</li>
					);
				})}
			</li>
		</li>
	);
};

export default DropCategorie;
