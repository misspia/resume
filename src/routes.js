import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage'
import MainPage from './containers/MainPage'; // eslint-disable-line import/no-named-as-default
import Menu from './components/Menu.js';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="pokedex" component={MainPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
