import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Characteres from './pages/Characteres';
import Comics from './pages/Comics';

const Main = () => (
	<Switch>
		{/* <Redirect from='/' to='/characteres' /> */}
		<Route path='/characteres' component={Characteres} />
		<Route path='/comics' component={Comics} />
	</Switch>
);


export default Main;