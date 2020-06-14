import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Search from './pages/search';

export default function Routes() {
	return (
		<Switch>
			<Route path="/home" exact component={Home} />
			<Route path="/" component={Search} />
		</Switch>
	);
}
