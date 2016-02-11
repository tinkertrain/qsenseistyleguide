import React, { Component } from 'react';
import { Link } from 'react-router';

export class Category extends Component {
  render() {
    const category = {
      name: 'Hello',
      description: 'My friend'
    };

    return (
      <div>
        <h1>{category.name}</h1>
        {this.props.children || (
          <p>{category.description}</p>
        )}
      </div>
    )
  }
}
