import React from 'react';


export default class AllFolderNotes extends React.Component {

  render() {

    let notesInFolder = this.props.notes.map( (note) => {
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