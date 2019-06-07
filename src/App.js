import React, { Component } from 'react';
import './App.css';
import store from './store';
import { Route } from 'react-router-dom'
import NavFolderList from './Components/NavFolderList'
import Header from './Components/Header'


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = store; // { folders, notes}
  }

  handleFolderClick() {

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

      <div className="app">
        <Route exact path="/" component={Header} />
        <Route exact path="/" render={() => < NavFolderList folders={this.state.folders} />} />


        <Route path="/folder" component={Header} />
        <Route path="/folder/:folderId" component={NavFolderList} />

      </div>
    );
  }
}