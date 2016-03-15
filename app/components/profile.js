import React from 'react';
import Router from 'react-router';
import Firebase from 'firebase';
import Rebase from 're-base';

import Repos from './github/repos';
import UserProfile from './github/userProfile';
import Notes from './notes/notes';
import getGithubInfo from '../utils/helpers';

const base = Rebase.createClass('https://nj-react.firebaseio.com/');

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      bio: {},
      repos: []
    }
  }
  componentDidMount() {
    this.init(this.props.params.username);
  }
  init(username) {

    this.ref = base.bindToState(username, {
      context: this,
      asArray: true,
      state: 'notes'
    });

    getGithubInfo(username)
    .then(function(data) {
      this.setState({
        bio: data.bio,
        repos: data.repos
      });
    }.bind(this));
  }
  componentWillReceiveProps(newProps) {
    base.removeBinding(this.ref);
    this.init(newProps.params.username);
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  handleAddNote(newNote) {
    base.post(this.props.params.username, {
      data: this.state.notes.concat([newNote])
    });
  }
  render() {
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
            addNote={(newNote) => this.handleAddNote(newNote)}/>
        </div>
      </div>
    );
  }
}

export default Profile;
