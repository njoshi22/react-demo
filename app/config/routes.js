import React from 'react';
import {Route, IndexRoute} from 'react-router';
import main from '../components/main';
import home from '../components/home';
import profile from  '../components/profile';

export default (
  <Route path="/" component={main}>
    <Route path="/profile/:username" component={profile} />
    <IndexRoute component={home}></IndexRoute>
  </Route>
);
