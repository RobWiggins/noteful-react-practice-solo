import React from 'react';

export default class Note extends React.Component {

  render() {
    
    let currentNoteId = this.props.linkInfo.match.params.noteId
    
    const currentNote = this.props.notes.find( note => note.id === currentNoteId);
    
    return (
      <div className="note-detailed">
        <h3>{currentNote.name}</h3>
        <p>{currentNote.modified}</p>
        <p>{currentNote.content}</p>
      </div>
    );
  }

}