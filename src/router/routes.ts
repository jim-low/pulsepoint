import React from "react";
import withLazyComponent from "./withLazyComponent";

const routes = [
	{
		name: 'home',
		path: '/',
		element: withLazyComponent(React.lazy(() => import('../pages/home'))),
	},
	{
		name: 'doctors',
		path: '/doctors',
		element: withLazyComponent(React.lazy(() => import('../pages/doctors'))),
	},
]

export default routes;
