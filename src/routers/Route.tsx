import React from 'react';
import { Route, RouteProps } from "react-router-dom";

type Props = {
	isPrivate?: boolean;
	isAuth?: boolean;
};

export default function RouteWrapper({
	isPrivate,
	isAuth,
	...rest
}: RouteProps & Props) {
	// const auth = useSelector((state: RootState) => state.auth);

	// const signed = auth.signedIn === true && auth.user !== null;
	// console.log("isPrivated", signed, isPrivate)
	// /**
	//  * Redirect user to SignIn page if he tries to access a private route
	//  * without authentication.
	//  */
	// if (isPrivate === true && !signed) {
	// 	console.log("redirect to login");
	// 	return <Redirect to="/admin" />;
	// }
	// /**
	//  * Redirect user to Main page if he tries to access a non private route
	//  * (SignIn or SignUp) after being authenticated.
	//  */
	// if (isAuth && signed) {
	// 	console.log("redirect to main");
	// 	return <Redirect to="/dashboard/test" />;
	// }

	// console.log("notfound")

	/**
	 * If not included on both previous cases, redirect user to the desired route.
	 */
	return <Route {...rest} />;
}