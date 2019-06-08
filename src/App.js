import React from 'react';
import './App.css';
// eslint-disable-next-line no-unused-vars
import { Route, Switch } from 'react-router-dom';
import NavFolderList from './Components/NavFolderList';
import Header from './Components/Header';
import FolderNotes from './Components/FolderNotes';
import AllFolderNotes from './Components/AllFolderNotes';
import Note from './Components/Note';
// eslint-disable-next-line no-unused-vars
import PageNotFound from './Components/PageNotFound';
import NotefulContext from './Components/NotefulContext'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
    };
  }

  handleNoteClick = (event) => {
    
  }

  componentDidMount() {

    // get and store folder data from api
    fetch("http://localhost:9090/folders")
    .then(response => { 
      if (!response.ok) {
        throw new Error('something went wrong with folder fetch!');
      }
      return response.json();
    })
    .then(data => {
      this.setState( {
        folders: data,
    })})
    .catch(error => console.log(error.message));

    // get and store note data from api
    fetch("http://localhost:9090/notes")
    .then(response => { 
      if (!response.ok) {
        throw new Error('something went wrong with notes fetch!');
      }
      return response.json();
    })
    .then(data => {
      this.setState( {
        notes: data,
    })})
    .catch(error => console.log(error.message));

  }

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


      /* ugly solution right now with wrapping the page not found so switch wont work, need to separate paths into unique divs
      and components in the future i.e. < HomePage /> , < FolderPage />, etc */

  render() {

    return (
      
      < NotefulContext.Provider value={{
        folders: this.state.folders,
        notes: this.state.notes,
      }}>
      <div className="app">
        {/* <Switch> */}
        <Route path="/" component={Header} />
        <Route exact path="/" component={NavFolderList} />
        <Route exact path="/" component={AllFolderNotes} />
          
        {/* <Route path="/folder/:folderId" component={Header} /> */}
        <Route path="/folder/:folderId" component={NavFolderList} />
        <Route path="/folder/:folderId" render={(props) => < FolderNotes match={props.match} />} />

        <Route path="/note/:noteId" render={(props) => < Note linkInfo={props} />} />
        {/* <Route component={PageNotFound} /> */}
        {/* // </Switch> */}
      </div>
      </NotefulContext.Provider>
      
    )
  }

}