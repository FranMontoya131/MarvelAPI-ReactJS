import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer'
import { Switch, Route, Redirect } from 'react-router-dom';
import Characteres from '../pages/Characteres';
import Comics from '../pages/Comics';
import { useLocation } from 'react-router-dom';

const Home = ({ component }) => {

	return (
		<>
		<Header />
		<Main>
			<Switch>
				<Route exact path='/' component={Characteres} />
				<Route path='/characteres' component={Characteres} />
				<Route path='/comics' component={Comics} />
			</Switch>
		</Main>
		<Footer />
		</>
	);
}

const Main = styled.div`
	min-height: calc(100vh - 60px - 60px);
	background-color: #222831;
`;

export default Home;