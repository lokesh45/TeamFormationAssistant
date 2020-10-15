import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App';
import Home from './Home';
import Signup from './Signup';
import ProjectDetails from './ProjectDetails';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/ProjectDetails" component={ProjectDetails} />
    <Route path="/Signup" component={Signup} />
  </Route>
);