import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Routes from './Routes.js';

ReactDOM.render(
	<Router history={browserHistory} routes={Routes} />,
  document.getElementById('root')
);
