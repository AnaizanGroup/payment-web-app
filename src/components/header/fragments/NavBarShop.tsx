import React from 'react';
import { useSelector } from 'react-redux';
import {
	CART_SHOPPING,
	SHOP_HOME,
	SHOP_PROMO,
} from '../../../settings/constant';
import DropCategorie from '../../dropCategorie/DropCategorie';

import '../Header.scss';

export const NavBarShop: React.FC = () => {
	const categories = useSelector((state: any) => state.products.categorie);

	return (
		<>
			<ul className="nav-bar-shop">
				<li>
					<a href={SHOP_HOME}>Magasin</a>
				</li>
				<DropCategorie
					link={'/store/products/'}
					nb={1}
					listCategorie={categories}
				/>
				<li>
					<a href={CART_SHOPPING}>Mon panier</a>
				</li>
				<li>
					<a href={SHOP_PROMO}>%&nbsp;Promotion</a>
				</li>
			</ul>
		</>
	);
};
