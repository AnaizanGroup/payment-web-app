import React, { type ReactNode } from 'react';

import './PopupLayout.scss';

interface Props {
	children: ReactNode;
	closes: boolean;
}

export const PopupLayout: React.FC<Props> = ({ children, closes }) => {
	return (
		<div
			className="popup-content"
			style={closes ? { display: 'flex' } : { display: 'none' }}
		>
			{children}
		</div>
	);
};
