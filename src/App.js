import React, { Component } from 'react';
import './Styles/App.css';
import vvit_image from './images/vvit_image.png';
import Home from './Components/Home.js';
import AboutUs from './Components/AboutUs.js';
import Courses from './Components/Courses.js';
import Placements from './Components/Placements.js';
import contactus from './Components/contactus.js';
import Footer from './Partials/Footer.js';
import Login from './Components/Login.js';
import Signup from './Components/Signup.js';
import StudentsList from './Components/StudentsList.js';



import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="main">
		<div className="parent">
			<div className="title">

				<img src={vvit_image} />
				<h1>Vidya vikas institute of technology</h1>
			</div>
			<div className="header">
				<ul>
					<li><Link to={"/home"} activeStyle={{color:"blue"}}>Home</Link></li>
					<li><Link to={"/aboutus"} activeStyle={{color:"blue"}}>Aboutus</Link></li>
					<li><Link to={"/Courses"} activeStyle={{color:"blue"}}>Courses</Link></li>
					<li><Link to={"/Placements"} activeStyle={{color:"blue"}}>Placements</Link></li>
					<li><Link to={"/contactus"} activeStyle={{color:"blue"}}>contactus</Link></li>
          <li><Link to={"/StudentsList"} activeStyle={{color:"blue"}}>StudentsList</Link></li>
          <li><Link to={"/Login"} activeStyle={{color:"blue"}}>Login</Link></li>
          <li><Link to={"/Signup"} activeStyle={{color:"blue"}}>Signup</Link></li>
          

				</ul>
			</div>

			{this.props.children}

			<Footer/>
		</div>
	</div>
    );
  }
}

export default App;
