import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { RootState } from '../ultils/store';

const PrivateRoute = (props: RouteProps) => {
	//check if user is logined
	// const auth = useSelector((state: RootState) => state.auth);

	// const signed = auth.signedIn === true && auth.user !== null;
	
	const isLoggedIn = Boolean(localStorage.getItem("access_token"));
	if (!isLoggedIn) return <Redirect to="/admin" />


	return <Route {...props} />;
};

export default PrivateRoute;