import React from 'react';

export default class Note extends React.Component {

  render() {

    console.log(this.props.match.params.noteId);


    return (
      <div>I rendered the Note component</div>  

    );
  }

}