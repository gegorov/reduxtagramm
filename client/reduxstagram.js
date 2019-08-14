import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import './styles/style.styl';

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

const router = (
  <Router history={browserHistory}>
    
    <Route path="/" component={PhotoGrid}>
    </Route>
    <Route path="/view/:postId"  component={Single}>
    </Route>
  </Router>
);



render(router, document.getElementById('root'));
