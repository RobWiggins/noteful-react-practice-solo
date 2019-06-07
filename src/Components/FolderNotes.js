import React from 'react';


export default class FolderNotes extends React.Component {

  render() {

    let currentFolderId = this.props.match.params.folderId;

    // get the notes that match the current selected folder ID and parse note info
    let notesInFolder = this.props.notes
      .filter(note => {
        return note.folderId === currentFolderId;
      })
      .map(note => {
        return (
          <li key={note.id}>
            <h3 className="note-title">{note.name}</h3>
            <p className="modified-date">{note.modified}</p>
            {/* <p className="note-content hidden">{note.content}</p> */}
          </li>
        );
      });

    return (
      <ul class="notes">
        {notesInFolder}
      </ul>
    );
  }

}