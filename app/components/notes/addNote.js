import React from 'react';


class addNote extends React.Component {
  setRef(ref) {
    this.note = ref;
  }
  handleSubmit() {
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote)
  }
  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add a new note" ref={(ref) => this.setRef(ref)}/>
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={() => this.handleSubmit()}>Submit</button>
        </span>
      </div>
    );
  }
}

addNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
}

export default addNote;
