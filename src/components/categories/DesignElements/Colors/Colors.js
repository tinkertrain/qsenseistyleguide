import React, { Component } from 'react';
import { Swatch } from './Swatch';
import { palette } from '../../../../data/styleguide';

import styles from './Colors.scss';

export class Colors extends Component {
  render() {
    return (
      <div>
        <section className={`${styles.bgLight} ${styles.pageSection}`}>
          <h2>Grayscale Palette</h2>
          <p>Grayscale color palette as found in <em>_palette.scss</em></p>
          <ul className={styles.swatchList}>
            {
              palette.grayscale.map((color) => (
                <li key={color.name} className={styles.swatch}>
                  <Swatch name={color.name} value={color.value} dark={color.dark}/>
                </li>
              ))
            }
          </ul>
        </section>
        <section className={`${styles.bgLight} ${styles.pageSection}`}>
          <h2>Primary Palette</h2>
          <p>Primary color palette as found in <em>_palette.scss</em></p>
          <ul className={styles.swatchList}>
            {
              palette.primary.map((color) => (
                <li key={color.name} className={styles.swatch}>
                  <Swatch name={color.name} value={color.value} dark={color.dark}/>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    );
  }
}
