import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './CategorySidebar.scss';

export class CategorySidebar extends Component {
  render() {
    const category = {
      name: 'Hello',
      items: [
        { name: 'Joe' },
        { name: 'Paty' },
        { name: 'Fred' }
      ]
    };

    return (
      <div>
        <Link to="/">◀︎ Back</Link>
        <h2>{category.name} Items</h2>
        <ul>
          {category.items.map((item, index) => (
            <li key={index}>
              <Link to={`/category/${category.name}/${item.name}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
