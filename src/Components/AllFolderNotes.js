import React from 'react';


export default class AllFolderNotes extends React.Component {

  render() {
    console.log(this.props.notes);
    // console.log(this.props.match.params.folderId);

    // let currentFolderId = this.props.match.params.folderId;

    // for specific folder notes... need to filter out non-matching folderIds

    let notesInFolder = this.props.notes.map( (note) => {
      return (
        <li key={note.id}>
          <h3 className="note-title">{note.name}</h3>
          <p className="modified-date">{note.modified}</p>
          <p className="note-content">{note.content}</p>
        </li>
      );
    });

    return (
      <ul>
        {notesInFolder}
      </ul>
    );
  }

}