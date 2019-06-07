import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  render() {
    return (
      <Link to='/'>
        <Header>
          <h1>Noteful</h1>
        </Header>
      </Link> 
    );

  }

}