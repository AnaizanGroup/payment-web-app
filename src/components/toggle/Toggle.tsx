import React from 'react';

import './Toggle.scss';
interface Props {
	label: string;
	value: string;
	setValue: (arg: any) => void;
}

const Toggle: React.FC<Props> = ({ label, value, setValue }: any) => {
	const setVal = (): void => {
		const input: any = document.getElementById(value);

		if (input.checked === true) {
			setValue(value);
		} else {
			setValue(null);
		}
	};

	return (
		<div className="box-checkboxs">
			<label> {label} </label>
			<div className="box-child" onClick={setVal}>
				<input type="checkbox" name={value} id={value} />
				<div className="slider round"></div>
			</div>
		</div>
	);
};

export default Toggle;
