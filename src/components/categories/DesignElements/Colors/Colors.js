import React, { Component } from 'react';
import { Swatch } from './Swatch';
import { palette } from '../../../../data/styleguide';

require('./Colors.scss');

export class Colors extends Component {
  render() {
    return (
      <div>
        <section className="qs_Bg--white pageSection">
          <p>Found in <code className="qs_CodeInline">_palette.scss</code></p>
          <h2>Grayscale Palette</h2>
          <p>Grayscale color palette as found in <em>_palette.scss</em></p>
          <ul className="swatchList">
            {
              palette.grayscale.map((color) => (
                <li key={color.name} className="swatchItem">
                  <Swatch name={color.name} value={color.value} dark={color.dark}/>
                </li>
              ))
            }
          </ul>
        </section>
        <section className="qs_Bg--lightgray pageSection">
          <h2>Primary Palette</h2>
          <p>Primary color palette as found in <em>_palette.scss</em></p>
          <ul className="swatchList">
            {
              palette.primary.map((color) => (
                <li key={color.name} className="swatchItem">
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
