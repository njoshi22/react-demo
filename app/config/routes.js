var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

var main = require('../components/main');
var home = require('../components/home');
var profile = require('../components/profile');

module.exports = (
  <Route path="/" component={main}>
    <Route path="/profile/:username" component={profile} />
    <IndexRoute component={home}></IndexRoute>
  </Route>
);
