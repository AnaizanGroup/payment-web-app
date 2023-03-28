import React, { useState } from 'react';

import { FiCheck, FiChevronDown } from 'react-icons/fi';

import './Select.scss';

interface Props {
	listOption: Array<{ label: string; value: string }>;
	defaultText: string;
	id: number;
}

const Select: React.FC<Props> = ({ listOption, defaultText, id }) => {
	const [showOption, setShowOptions] = useState(false);
	const [select, setSelect] = useState(defaultText);
	const [index, setIndex] = useState(0);

	const checkOption = (label: string, index: number): void => {
		setIndex(index);
		setSelect(label);

		sessionStorage.setItem(`sort${id}`, label);
	};

	return (
		<div className="select">
			<span
				onClick={() => {
					setShowOptions(true);
				}}
			>
				<span className="opt"> {select} </span>
				<FiChevronDown />
			</span>
			<div
				className="options"
				style={!showOption ? { display: 'none' } : { display: 'block' }}
			>
				<span
					onClick={() => {
						setShowOptions(false);
					}}
					className="close"
				>
					&times;
				</span>
				{listOption?.map(({ label, value }: any, indexx: number) => {
					return (
						<li
							key={indexx}
							onClick={() => {
								checkOption(label, indexx);
							}}
							className="option"
						>
							{' '}
							{label} {index === indexx ? <FiCheck /> : ''}{' '}
						</li>
					);
				})}
			</div>
		</div>
	);
};

export default Select;
