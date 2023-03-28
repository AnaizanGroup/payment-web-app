import React, { type ReactNode } from 'react';

interface Props {
	para: ReactNode;
}

const Cart: React.FC<Props> = ({ para }) => {
	return (
		<div>
			<h1>Cart component</h1>
		</div>
	);
};

export default Cart;
