import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavFolderList extends React.Component {

  render() {

    // map through our folders here passed in as props, assigning the 
    // folder ID to each one, then doing a dynamic /folder/:folderId link
    // to each one

    
    // idx not used atm, also is this the best way to handle dynamic folder references?
    const navLinkFolderList = this.props.folders.map( (folder, idx) => {
      return <NavLink key={idx} to={`/folder/${folder.id}`} activeClassName="active">{folder.name}</NavLink>
    });

    return (
      <nav>
        {/* <NavLink to="/folder">Folder 1</NavLink> 
        <NavLink to="/folder">Folder 2</NavLink>
        <NavLink to="/folder">Folder 3</NavLink> */}
        {navLinkFolderList}
      </nav> 
    );
  }

}