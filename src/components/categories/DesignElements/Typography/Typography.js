import React, { Component } from 'react';
import styles from './Typography.scss';

export class Typography extends Component {
  render() {
    return (
      <div>
        <h3>Typography</h3>
        <section>
          <h4>Headings</h4>
          <ul>
            <li>
              <h1><span>H1</span>The quick, brown fox</h1>
            </li>
            <li>
              <h2><span>H2</span>The quick, brown fox</h2>
            </li>
            <li>
              <h3><span>H3</span>The quick, brown fox</h3>
            </li>
            <li>
              <h4><span>H4</span>The quick, brown fox</h4>
            </li>
          </ul>
        </section>
        <section>
          <h4>Page Titles</h4>
          <h1><span>h1.Page-Title</span>Page Title</h1>
        </section>
        <section>
          <h4>Body copy</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section>
          <h4>Other body copy</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section>
          <h4>Links</h4>
          <p>Something</p>
          <ul>
            <li>
              <a href="#" className={styles.noState}>Link example</a>
            </li>
            <li>
              <a href="#" className={styles.mouseOver}>Mouse Over</a>
            </li>
            <li>
              <a href="#" className={styles.visited}>Visited</a>
            </li>
            <li>
              <a href="#" className={styles.active}>Active</a>
            </li>
            <li>
              <a href="#" className={styles.focused}>Focused</a>
            </li>
          </ul>
        </section>
        <section>
          <h4>Code</h4>
          <p>Something here</p>
          <pre>
            <code>var example = true;</code>
          </pre>
        </section>
      </div>
    );
  }
}
