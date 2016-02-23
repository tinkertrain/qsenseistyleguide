import React, { Component } from 'react';
import Sidebar from './components/Sidebar/';
import { Header } from './components/Header/Header';

require('./App.scss');

export class App extends Component {
  render() {
    const { content, sidebar, location } = this.props;

    return (
      <div>
        <Header />
        <div className="container">
          <section className="main">
            {this.props.children}
          </section>
          <aside className="sidebar">
            <Sidebar location={location.pathname}/>
          </aside>
        </div>
        <footer className="footer">Q-Sensei</footer>
      </div>
    );
  }
}
