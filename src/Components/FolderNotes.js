import React from 'react';
import { Link } from 'react-router-dom'

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
          <li key={note.id} className="note-abbreviated">
            <h3 className="note-title"><Link to={`/note/${note.id}`}>{note.name}</Link></h3>
            <p className="modified-date">{note.modified}</p>
            {/* <p className="note-content hidden">{note.content}</p> */}
          </li>
        );
      });

    return (
      <ul className="notes">
        {notesInFolder}
      </ul>
    );
  }

}