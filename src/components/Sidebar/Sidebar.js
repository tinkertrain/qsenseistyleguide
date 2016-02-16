import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';
import { categories } from '../../data/styleguide';

import styles from './Sidebar.scss';

export class Sidebar extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className={styles.mainSidebar}>
        <ul className={styles.topLevel}>
          {
            categories.map((category) => (
              <li key={category.name}>
                <h4>
                  <Link
                    className={classnames({ [styles.active]: location.indexOf(dasherize(category.name)) >= 0 })}
                    to={`/${dasherize(category.name)}`}
                  >
                    {category.name}
                  </Link>
                </h4>
                <ul className={styles.secondLevel}>
                  { category.items.map((item) => (
                      <li key={item.name}>
                        <Link
                          className={classnames({ [styles.active]: location.indexOf(dasherize(item.name)) >= 0 })}
                          to={`/${dasherize(category.name)}/${dasherize(item.name)}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </li>)
            )
          }
        </ul>
      </div>
    );
  }
}


function dasherize(str) {
  return str.replace(/\s+/g, '_').toLowerCase();
}
