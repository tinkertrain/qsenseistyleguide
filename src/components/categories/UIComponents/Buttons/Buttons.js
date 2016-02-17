import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Buttons.scss';

export class Buttons extends Component {
  render() {
    return (
      <div>
        <section className={`${styles.bgLight} ${styles.pageSection}`}>
          <h2>Buttons</h2>
        </section>
      </div>
    );
  }
}
