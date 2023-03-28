import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import './ShowPasswdText.scss';

interface Input {
	type: string;
	value?: string;
	id?: string;
}
export const ShowPasswdText: React.FC<Input> = ({ id }) => {
	const [eye, setEye] = useState(false);

	const eyePwd = (): void => {
		const input: any = document.getElementById(id as string);

		if (input.type === 'password') {
			setEye(true);
			input.type = 'text';
		} else {
			setEye(false);
			input.type = 'password';
		}
	};
	return (
		<span className="eye" onClick={eyePwd}>
			{' '}
			{eye ? <FiEye /> : <FiEyeOff />}{' '}
		</span>
	);
};
