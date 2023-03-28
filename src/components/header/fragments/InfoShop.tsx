import React from 'react';
import { FiHeart } from 'react-icons/fi';
import '../Header.scss';

export const InfoShop: React.FC = () => {
	return (
		<>
			<div className="div-shop-name">
				<h1> LVM shop </h1>
				<p>
					<i className={`flag-icon flag-icon-bj`}></i>
					<span>Bénin</span>
					<span className="followers">
						{' '}
						<FiHeart /> 1200 Abonnés{' '}
					</span>
					<button className="btn-follo"> suivre</button>
				</p>
				<p>
					<span> Ouvert depuis 2015 </span>
					<button>Contacter le vendeur</button>
				</p>
			</div>
		</>
	);
};
