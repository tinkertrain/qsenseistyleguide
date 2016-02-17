import React, { Component } from 'react';
import styles from './Container.scss';

export class Container extends Component {
  render() {
    const { location } = this.props;
    const currentPathArray = location.pathname.split('/');
    const currentPath = splitAndCapitalize(currentPathArray[currentPathArray.length - 1]);
    const parentPath = splitAndCapitalize(currentPathArray[currentPathArray.length - 2]);

    return (
      <div>
        <header className={styles.header}>
          <h4>{parentPath}: {currentPath}</h4>
        </header>
        <section className={styles.main}>
          {this.props.children || (
            <p>Design Elements description could go here, or not</p>
          )}
        </section>
      </div>
    );
  }
}

function splitAndCapitalize(str) {
  let toArr = str.split('_');
  let capArray = toArr.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());

  return capArray.join(' ');
}
