import React from 'react';

import './RadioButton.scss';

interface Props {
	label1: string;
	label2: string;
	role: string;
	setRole: (args: any) => void;
}

export const RadioButton: React.FC<Props> = ({
	label1,
	label2,
	role,
	setRole,
}) => {
	return (
		<div className="role">
			<div className="box-input">
				<div
					className={`radio-input ${
						role === 'Achecteur' ? 'radio-select' : ''
					}`}
					onClick={() => {
						setRole('Achecteur');
					}}
				></div>
				<label> {label1} </label>
			</div>
			<div className="box-input">
				<div
					className={`radio-input ${role === 'Vendeur' ? 'radio-select' : ''}`}
					onClick={() => {
						setRole('Vendeur');
					}}
				></div>
				<label> {label2} </label>
			</div>
		</div>
	);
};
