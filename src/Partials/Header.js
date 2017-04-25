import React, { Component } from 'react';
import './App.css';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

export default class Header extends Component {
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
						<li>Home</li>
						<li>About us</li>
						<li>Facilities</li>
						<li>Placements</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
		</div>
    );
  }
}
