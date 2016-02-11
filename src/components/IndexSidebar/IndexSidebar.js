import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './IndexSidebar.scss';

export class IndexSidebar extends Component {
  render() {
    const category = {
      name: 'Hello'
    };
    
    return (
      <div>
        <h2>Categories</h2>
        <ul>
          <li>
            <Link to={`/category/${category.name}`}>{category.name}</Link>
          </li>
        </ul>
      </div>
    )
  }
}
