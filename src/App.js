import React, { Component } from 'react';
import Sidebar from './components/Sidebar/';
import { Index } from './components/Index/Index';
import { Header } from './components/Header/Header';

import styles from './App.scss';

export class App extends Component {
  render() {
    const { content, sidebar, location } = this.props;

    return (
      <div>
        <Header />
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <Sidebar location={location.pathname}/>
          </aside>
          <section className={styles.main}>
            {this.props.children || <Index />}
          </section>
        </div>
        <footer className={styles.footer}>Q-Sensei</footer>
      </div>
    );
  }
}
