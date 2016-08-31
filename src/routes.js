import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import Menu from './components/Menu.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Menu}/>
    <Route path="about" component={Menu}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
