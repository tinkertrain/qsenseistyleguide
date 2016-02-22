import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../../images/logo_white.png';

require('./Header.scss');

export class Header extends Component {
  render() {
    return (
      <header className="mainHeader">
        <Link to="/">
          <img src={logo} alt="Q-Sensei"/>
        </Link>
      </header>
    );
  }
}
