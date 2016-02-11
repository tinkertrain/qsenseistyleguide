import React, { Component } from 'react';

export class Item extends Component {
  render() {
    const { category, item } = this.props.params;
    const menuItem = {
      name: 'ld',
      price: '7'
    };

    return (
      <div>
        <h1>{menuItem.name}</h1>
        <p>${menuItem.price}</p>
      </div>
    );
  }
}
