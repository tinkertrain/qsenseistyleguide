import React, { Component } from 'react';
import { Swatch } from './Swatch';
import { palette } from '../../../../data/styleguide';

import styles from './Colors.scss';

export class Colors extends Component {
  render() {
    return (
      <div>
        <h3>Colors</h3>
        <p>These are the grayscale and primary color palettes as found in _palette.scss</p>
        <h4>Grayscale Palette</h4>
        <ul className={styles.swatchList}>
          {
            palette.grayscale.map((color) => (
              <li key={color.name} className={styles.swatch}>
                <Swatch name={color.name} value={color.value} dark={color.dark}/>
              </li>
            ))
          }
        </ul>
        <h4>Primary Palette</h4>
        <ul className={styles.swatchList}>
          {
            palette.brand.map((color) => (
              <li key={color.name} className={styles.swatch}>
                <Swatch name={color.name} value={color.value} dark={color.dark}/>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}
