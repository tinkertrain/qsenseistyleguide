import React, { Component } from 'react';
import { IndexSidebar } from './components/IndexSidebar/IndexSidebar';
import { Index } from './components/Index/Index';
import styles from './App.scss';

export class App extends Component {
  render() {
    const { content, sidebar } = this.props;

    return (
      <div>
        <header className={styles.header}>Style Guide</header>
        <div className={styles.container}>
          <aside className={styles.sidebar}>
            {sidebar || <IndexSidebar />}
          </aside>
          <section className={styles.main}>
            {content || <Index />}
          </section>
        </div>
        <footer className={styles.footer}>Q-Sensei</footer>
      </div>
    );
  }
}
