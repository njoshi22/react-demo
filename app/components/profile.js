var React = require('react');
var Router = require('react-router');
var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');

var Repos = require('./github/repos');
var UserProfile = require('./github/userProfile');
var Notes = require('./notes/notes');
var helpers = require('../utils/helpers');

var profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState:function() {
    return {
      notes: [],
      bio: {},
      repos: []
    };
  },
  componentDidMount: function() {
    this.ref = new Firebase('https://nj-react.firebaseio.com/');
    this.init(this.props.params.username);
  },
  init: function(username) {
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef,'notes');

    helpers.getGithubInfo(username)
    .then(function(data) {
      this.setState({
        bio: data.bio,
        repos: data.repos
      });
    }.bind(this));
  },
  componentWillReceiveProps: function(newProps) {
    this.unbind('notes');
    this.init(newProps.params.username);
  },
  componentWillUnmount: function() {
    this.unbind('notes');
  },
  handleAddNote: function(newNote) {
    // update firebase with the new note
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username}
                notes={this.state.notes}
                addNote={this.handleAddNote}/>
        </div>
      </div>
    );
  }
});

module.exports = profile;
