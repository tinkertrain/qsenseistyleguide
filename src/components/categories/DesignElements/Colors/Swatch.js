import React, { Component } from 'react';
import classnames from 'classnames';

import styles from './Swatch.scss';

export class Swatch extends Component {
  render() {
    const { name, value, dark } = this.props;

    return (
      <div className={classnames(styles.swatch, {[styles.isDark]: dark})}>
        <div className={styles.sample} style={{backgroundColor: value}}>{value}</div>
        <div className={styles.info}>{name}</div>
      </div>
    );
  }
}
