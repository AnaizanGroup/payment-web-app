import React from 'react';

import './BoxAccount.scss';

import facebook from '../../assets/images/svg/facebook.svg';
import tiktok from '../../assets/images/svg/tiktok.svg';
import google from '../../assets/images/png/googles.png';
import instagram from '../../assets/images/svg/instagram.svg';

interface Props {
	openAuth?: (arg: any) => void;
}

const BoxAccount: React.FC<Props> = ({ openAuth }) => {
	return (
		<div className="box-account">
			<div className="bars">
				<div></div>
				or continue
				<div></div>
			</div>
			<div className="groups-sociaux">
				<a href="">
					<img src={google} alt="google" />
				</a>
				<a href="">
					<img src={facebook} alt="facebbok" />
				</a>

				<a href="">
					<img src={instagram} alt="instagram" />
				</a>
				<a href="">
					<img src={tiktok} alt="tiktok" />
				</a>
			</div>
		</div>
	);
};

export default BoxAccount;
