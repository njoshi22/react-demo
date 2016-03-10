var React = require('react');
var NoteList = require('./noteList');
var AddNote = require('./addNote');

var notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render: function() {
    console.log('Notes: ',this.props.notes);
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <AddNote username={this.props.username} addNote={this.props.addNote}/>
        <NoteList notes={this.props.notes} />
      </div>
    );
  }
});

module.exports = notes;
