import React from 'react';

export default class Note extends React.Component {

  render() {
    
    let currentNoteId = this.props.linkInfo.match.params.noteId
    
    const currentNote = this.props.notes.find( note => note.id === currentNoteId);
    let noteModified = (new Date(currentNote.modified)).toLocaleDateString();
    return (
      <div className="note-detailed-container">
        <div className="note-detailed">
          <h3>{currentNote.name}</h3>
          <p>Modified: {noteModified}</p>
          <p>{currentNote.content}</p>
        </div>
        <button onClick={() => this.props.linkInfo.history.goBack()}>Go back</button>
      </div>
    );
  }

}