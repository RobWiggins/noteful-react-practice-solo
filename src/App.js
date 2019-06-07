import React from 'react';
import './App.css';
import store from './store';
import { Route } from 'react-router-dom'
import NavFolderList from './Components/NavFolderList'
import Header from './Components/Header'
import FolderNotes from './Components/FolderNotes'
import AllFolderNotes from './Components/AllFolderNotes'
import Note from './Components/Note'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = store; // { folders, notes}
  }

  handleNoteClick = (event) => {
    
  }



  render() {
    return (
      /* (main route) exact path="/" */

      // generic header - that you can click on to go back to "/"
      // NavFolderList
      // NoteList

      /* (folder route) */
      // generic header
      // NavFolderList - now a folder just needs to be styled/toggled to denote click)
      // NoteList - folderID needs to be passed in to denote which folderId to sort notes on

      /* (note route) */
      // generic header
      // FolderList - only show current folder in as text
      // GoBack - go back button that returns to home page
      // Note

      <div className="app">
        <Route path="/" component={Header} />
        <Route exact path="/" render={() => < NavFolderList folders={this.state.folders} />} />
        <Route exact path="/" render={() => < AllFolderNotes notes={this.state.notes} />} />

        {/* <Route path="/folder/:folderId" component={Header} /> */}
        <Route path="/folder/:folderId" render={() => < NavFolderList folders={this.state.folders} />} />
        <Route path="/folder/:folderId" render={(props) => < FolderNotes notes={this.state.notes} match={props.match} />} />

        {/* Add path and display for specific note selection */}
        {/* go back button */}
        <Route path="/note/:noteId" render={(props) => < Note notes={this.state.notes} linkInfo={props} />} />


      </div>
    );
  }
}