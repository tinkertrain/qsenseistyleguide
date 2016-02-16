import React, { Component } from 'react';
import styles from './DesignElements.scss';

export class DesignElements extends Component {
  render() {

    const { location } = this.props;
    const currentPathArray = location.pathname.split('/');
    const currentPath = currentPathArray[currentPathArray.length - 1];

    return (
      <div>
        <header className={styles.header}>
          <h4>Design Elements: {currentPath}</h4>
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
