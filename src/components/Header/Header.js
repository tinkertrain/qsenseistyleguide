import React, { Component } from 'react';
import logo from '../../images/logo.png';

import styles from './Header.scss';

export class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <img src={logo} alt="Q-Sensei"/>
      </header>
    );
  }
}
