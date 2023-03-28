import React from 'react';

import './Brands.scss';

import bl1 from '../../../../assets/images/png/bl1.png';
import bl2 from '../../../../assets/images/png/bl2.png';
import bl3 from '../../../../assets/images/png/bl3.png';
import bl4 from '../../../../assets/images/png/bl4.png';
import bl5 from '../../../../assets/images/png/bl5.png';

const Brands: React.FC = () => {
	return (
		<div className="parent">
			<section className="section-two-pscan section">
				<h2 className="section-title">Trusted by many brands</h2>
				<div className="div-imgs-group">
					<img src={bl1} />
					<img src={bl2} />
					<img src={bl3} />
					<img src={bl4} />
					<img src={bl5} />
				</div>
			</section>
		</div>
	);
};

export default Brands;
