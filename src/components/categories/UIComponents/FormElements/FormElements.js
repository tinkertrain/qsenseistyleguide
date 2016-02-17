import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './FormElements.scss';

export class FormElements extends Component {
  render() {
    return (
      <div>
        <section className={`${styles.bgLight} ${styles.pageSection}`}>
          <h2>Form Elements</h2>
        </section>
      </div>
    );
  }
}
