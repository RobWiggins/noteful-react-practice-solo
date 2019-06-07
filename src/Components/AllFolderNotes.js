import React from 'react';
import { Link } from 'react-router-dom';

export default class AllFolderNotes extends React.Component {

  render() {

    let notesInFolder = this.props.notes.map( (note) => {
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