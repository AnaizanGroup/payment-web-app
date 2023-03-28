import * as React from 'react';
import './globals/globals.scss';
import './globals/variables.scss';
import ROUTES from './router';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
	return (
		<div className="parent-body">
			<AuthProvider>
				<ROUTES />
			</AuthProvider>
		</div>
	);
};

export default App;
