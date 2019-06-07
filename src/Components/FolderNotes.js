import React from 'react';


export default class FolderNotes extends React.Component {

  render() {
    console.log(this.props.notes);
    console.log(this.props.match.params.folderId);

    let currentFolderId = this.props.match.params.folderId;

    return (
      <ul>
        <li>note 1</li>
        <li>note 2</li>
        <li>note 3</li>
      </ul>
    );
  }

}