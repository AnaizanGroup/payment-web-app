import * as React from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import './Layout.scss';

interface Props {
	children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }): React.ReactElement => {
	return (
		<div className="layout">
			<Header />
			<div className="body">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
