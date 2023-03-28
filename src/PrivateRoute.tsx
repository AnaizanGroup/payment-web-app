import React, { Navigate } from 'react-router-dom';
import { useContext, type FC } from 'react';
import AuthContext from './context/AuthContext';
import { type Props } from './@types/children';
import { type Actions } from './@types/actions';

const PrivateRoute: FC<Props> = ({ children }) => {
	const { user } = useContext(AuthContext) as Actions;
	if (user === null) {
		return <Navigate to="/login" replace />;
	}
	return <>{children}</>;
};

export default PrivateRoute;
