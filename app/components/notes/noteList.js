var React = require('react');
var Note = require('./note');

var noteList = React.createClass({
  render: function() {
    var note_list = this.props.notes.map(function(note,index) {
      return (
        <li className="list-group-item" key={index}>{note[".value"]}</li>
      );
    });
    return (
      <ul className="list-group">
        {note_list}
      </ul>
    );
  }
});

module.exports = noteList;
