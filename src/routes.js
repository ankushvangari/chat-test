import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './pages/index.js';
import lobby from './pages/lobby.js';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/pages/index.js" component={App}>
    <Route path="/pages/lobby.js" component={lobby} />
  </Route>
);