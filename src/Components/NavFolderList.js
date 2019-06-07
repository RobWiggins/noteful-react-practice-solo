import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavFolderList extends React.Component {

  render() {
    return (
      <nav>
        <NavLink to="/folder">Folder 1</NavLink> 
        <NavLink to="/folder">Folder 2</NavLink>
        <NavLink to="/folder">Folder 3</NavLink>
      </nav> 
    );
  }

}