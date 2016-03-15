import React from 'react';
import NoteList from './noteList';
import AddNote from './addNote';

const notes = ({username, notes, addNote}) => {
  return (
    <div>
      <h3>Notes for {username}</h3>
      <AddNote username={username} addNote={addNote}/>
      <NoteList notes={notes} />
    </div>
  );
}

notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
}

export default notes;
