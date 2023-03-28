import React from 'react';
import { FaCheck } from 'react-icons/fa';

import './Checkbox.scss';

interface Props {
	text: string;
	value: string;
	setValue: (args: any) => void;
}

export const Checkbox: React.FC<Props> = ({ text, value, setValue }) => {
	const setVal = (): void => {
		const input: any = document.getElementById(value);

		if (input.checked === true) {
			setValue(value);
		} else {
			setValue(null);
		}
	};

	return (
		<div className="box-checkbox">
			<div className="checkbox" onClick={setVal}>
				<input type="checkbox" name={value} id={value} />
				<FaCheck />
			</div>
			<span> {text} </span>
		</div>
	);
};
