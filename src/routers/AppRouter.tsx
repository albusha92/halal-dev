
import { Layout } from 'antd';
import React from 'react';
import { Switch } from "react-router-dom";
import { IRoute } from '../schema/route';
import Header from '../uikit/header/Header';
import "./AppRouter.css";
import Route from './Route';
import routes from './routes';


export default function AppRouters() {
	return (
		<Switch>
			<Route path="/">
				<Layout className="site-main-wrapper">
					<Header />
					<Layout.Content className="site-content-wrapper">
						<Switch>
							{routes.map(({ component, ...rest }: IRoute, idx) => {
								return <Route key={idx} component={component} {...rest} />
							})}
							{/* <Route path="/404" component={NotFound} /> */}
							{/* <Redirect to="/404" /> */}
						</Switch>
					</Layout.Content>

				</Layout>
			</Route>

		</Switch >
	)
}