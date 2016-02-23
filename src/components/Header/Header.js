import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import logo from '../../images/logo_white.png';

require('./Header.scss');

export class Header extends Component {
  render() {
    return (
      <header className="mainHeader">
        <IndexLink to="/">
          <img src={logo} alt="Q-Sensei"/>
        </IndexLink>
      </header>
    );
  }
}
