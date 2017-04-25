import React from 'react'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import App from './App.js';
import Home from './Components/Home.js';
import AboutUs from './Components/AboutUs.js';
import Courses from './Components/Courses.js';
import Placements from './Components/Placements.js';
import contactus from './Components/contactus.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import StudentsList from './Components/StudentsList.js';


export default (
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="home" component={Home} />
			<Route path="aboutus" component={AboutUs} />
			<Route path="Courses" component={Courses} />
			<Route path="Placements" component={Placements} />
			<Route path="contactus" component={contactus} />
			<Route path="Login" component={Login} />
			<Route path="Signup" component={Signup} />
			<Route path="StudentsList" component={StudentsList} />
			
		</Route>
	</Router>
)
