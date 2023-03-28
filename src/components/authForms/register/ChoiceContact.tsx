import React from 'react';

interface Props {
	option: number;
	setOption: (arg: number) => void;
}

const ChoiceContact: React.FC<Props> = ({ option, setOption }) => {
	const active = {
		background: 'var(--dark)',
		color: 'var(--white)',
	};

	return (
		<div className="option-created">
			<li
				style={option === 0 ? active : undefined}
				onClick={() => {
					setOption(0);
				}}
			>
				Email
			</li>
			<li
				style={option === 1 ? active : undefined}
				onClick={() => {
					setOption(1);
				}}
			>
				Phone Number
			</li>
		</div>
	);
};

export default ChoiceContact;
