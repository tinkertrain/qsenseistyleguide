import React, { Component } from 'react';
import CodeBlock from '../../../CodeBlock';

import styles from './Buttons.scss';

export class Buttons extends Component {
  render() {
    return (
      <div>
        <section className={`${styles.bgLight} ${styles.pageSection}`}>
          <h2>Color Variations</h2>
          <ul className={styles.examplesList}>
            <li>
              <h3>Green</h3>
              <div className={styles.sample}>
                <button className={`${styles.qs_Button} ${styles['qs_Button--green']}`}>Sign up</button>
              </div>
              <p>Usage:</p>
              <div className={styles.qs_codeBlock}>
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--green">Sign up</button>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Dark</h3>
              <div className={styles.sample}>
                <button className={`${styles.qs_Button} ${styles['qs_Button--dark']}`}>See all features</button>
              </div>
              <p>Usage:</p>
              <div className={styles.qs_codeBlock}>
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--dark">See all features</button>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Red</h3>
              <div className={styles.sample}>
                <button className={`${styles.qs_Button} ${styles['qs_Button--red']}`}>Delete</button>
              </div>
              <p>Usage:</p>
              <div className={styles.qs_codeBlock}>
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--red">Delete</button>`
                  }
                </CodeBlock>
              </div>
            </li>
          </ul>
        </section>
        <section className={`${styles.bgMedium} ${styles.pageSection}`}>
          <h2>Size Variations</h2>
          <ul className={styles.examplesList}>
            <li>
              <h3>Standard</h3>
              <div className={styles.sample}>
                <button className={`${styles.qs_Button} ${styles['qs_Button--green']}`}>Sign up</button>
              </div>
              <p>Usage:</p>
              <div className={styles.qs_codeBlock}>
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--green">Sign up</button>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Small</h3>
              <div className={styles.sample}>
                <button className={`${styles.qs_Button} ${styles['qs_Button--green']} ${styles['qs_Button--small']}`}>Sign up</button>
              </div>
              <p>Usage:</p>
              <div className={styles.qs_codeBlock}>
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--green qs_Button--small">Sign up</button>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Tiny</h3>
              <div className={styles.sample}>
                <button className={`${styles.qs_Button} ${styles['qs_Button--green']} ${styles['qs_Button--tiny']}`}>Sign up</button>
              </div>
              <p>Usage:</p>
              <div className={styles.qs_codeBlock}>
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--green qs_Button--tiny">Sign up</button>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Full Width</h3>
              <div className={styles.sample}>
                <button className={`${styles.qs_Button} ${styles['qs_Button--green']} ${styles['qs_Button--fullwidth']}`}>Sign up</button>
              </div>
              <p>Usage:</p>
              <div className={styles.qs_codeBlock}>
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--green qs_Button--fullwidth">Sign up</button>`
                  }
                </CodeBlock>
              </div>
            </li>
          </ul>
        </section>
        <section className={`${styles.bgLight} ${styles.pageSection}`}>
          <h2>Styles Variations</h2>
          <ul className={styles.examplesList}>
            <li>
              <h3>Standard</h3>
              <div className={styles.sample}>
                <button className={`${styles.qs_Button} ${styles['qs_Button--dark']}`}>Contact Us</button>
              </div>
              <p>Usage:</p>
              <div className={styles.qs_codeBlock}>
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--dark">Contact Us</button>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Outline</h3>
              <div className={styles.sample}>
                <button className={`${styles.qs_Button} ${styles['qs_Button--dark']} ${styles['qs_Button--outline']}`}>Contact us</button>
              </div>
              <p>Usage:</p>
              <div className={styles.qs_codeBlock}>
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--dark qs_Button--outline">Contact Us</button>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Disabled</h3>
              <div className={styles.sample}>
                <button className={`${styles.qs_Button} ${styles['qs_Button--red']} ${styles['qs_Button--disabled']}`}>Delete</button>
              </div>
              <p>Usage:</p>
              <div className={styles.qs_codeBlock}>
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--red qs_Button--disabled">Delete</button>`
                  }
                </CodeBlock>
              </div>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
