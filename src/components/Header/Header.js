import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../../images/logo_white.png';

import styles from './Header.scss';

export class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <Link to="/">
          <img src={logo} alt="Q-Sensei"/>
        </Link>
      </header>
    );
  }
}
