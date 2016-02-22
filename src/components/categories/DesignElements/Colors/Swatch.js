import React, { Component } from 'react';
import classnames from 'classnames';

require('./Swatch.scss');

export class Swatch extends Component {
  render() {
    const { name, value, dark } = this.props;

    return (
      <div className={classnames('swatch', {isDark: dark})}>
        <div className="swatchSample" style={{backgroundColor: value}}>{value}</div>
        <div className="swatchInfo">{name}</div>
      </div>
    );
  }
}
