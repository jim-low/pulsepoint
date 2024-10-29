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
	{
		name: 'Appointments',
		path: '/appointments',
		element: withLazyComponent(React.lazy(() => import('../pages/appointments'))),
	},
	{
		name: 'Set Appointment',
		path: '/appointments-set',
		element: withLazyComponent(React.lazy(() => import('../pages/AppointmentSetting'))),
	},
	{
		name: 'Confirm Appointment',
		path: '/appointment-confirm',
		element: withLazyComponent(React.lazy(() => import('../pages/AppointmentConfirm'))),
	},
	{
		name: 'Appointment Has Set',
		path: '/appointment-has-set',
		element: withLazyComponent(React.lazy(() => import('../pages/AppointmentHasSet'))),
	},
]

export default routes;
