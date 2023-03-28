import React from 'react';
import { CardText2 } from '../cardText2/CardText2';

import './Section3.scss';

import s4_image from '../../../../assets/images/png/s4_image.png';

interface Props {
	title: string;
	para: any;
}

export const Section3: React.FC<Props> = ({ title, para }: any) => {
	return (
		<section className="section-four section">
			<img src={s4_image} />
			<CardText2
				title={title}
				para={para}
				opt1={''}
				opt2={''}
				opt3={''}
				opt4={''}
				opt5={''}
			/>
		</section>
	);
};
