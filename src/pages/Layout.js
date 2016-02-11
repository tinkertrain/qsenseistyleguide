import React, { Component } from 'react';
import { Sidebar } from '../components/Sidebar/Sidebar';
import styles from './Layout.scss';

export class Layout extends Component {
  render() {
    return (
      <div>
        <header className={styles.header}>
          <div>Q-Sensei's Style Guide</div>
        </header>
        <div className={styles.container}>
          <section className={styles.main}>Some Content</section>
          <Sidebar />
        </div>
        <footer className={styles.footer}>Copyright</footer>
      </div>
    );
  }
}
