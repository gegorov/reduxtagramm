import React, { Component } from 'react'
import { render } from 'react-dom';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store';

import './styles/style.styl';


import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={PhotoGrid}>
      </Route>
      <Route path="/view/:postId"  component={Single}>
      </Route>
    </Router>
  </Provider>
);



render(router, document.getElementById('root'));
