import React from 'react';

import '../Header.scss';

export const SearchBarShop: React.FC = () => {
	return (
		<>
			<form className="search-bar-shop">
				<input
					type="text"
					placeholder="Rechercher vos produits préféré ici..."
				/>
				<button>oK</button>
			</form>
		</>
	);
};
