import React from 'react';

import './CardText2.scss';

interface Props {
	title: string;
	para: string;
	opt2: string;
	opt3: string;
	opt4: string;
	opt5: string;
	opt1: string;
}

export const CardText2: React.FC<Props> = ({
	title,
	para,
	opt1,
	opt2,
	opt3,
	opt4,
	opt5,
}: any) => {
	return (
		<>
			<div className="div-right-s4">
				<h2 className="section-title">{title}</h2>
				<p>{para}</p>
				<div>
					<p> {opt1} </p>
					<p> {opt2} </p>
					<p> {opt3} </p>
					<p> {opt4} </p>
					<p> {opt5} </p>
				</div>
				<button>Learn More</button>
			</div>
		</>
	);
};
