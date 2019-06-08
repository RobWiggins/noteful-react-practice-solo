import React from 'react';
import NotefulContext from './NotefulContext';

export default class Note extends React.Component {

  static contextType = NotefulContext;

  render() {
    
    let currentNoteId = this.props.linkInfo.match.params.noteId
    
    const currentNote = this.context.notes.find( note => note.id === currentNoteId);
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