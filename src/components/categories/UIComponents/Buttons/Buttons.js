import React, { Component } from 'react';
import CodeBlock from '../../../CodeBlock';

export class Buttons extends Component {
  render() {
    return (
      <div>
        <section className="bgLight pageSection">
          <p>Found in <code className="qs_CodeInline">_buttons.scss</code></p>
          <h2>Color Variations</h2>
          <ul className="examplesList">
            <li>
              <h3>Green</h3>
              <div className="sample">
                <button className="qs_Button qs_Button--green">Sign up</button>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--green">Sign up</button>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Dark</h3>
              <div className="sample">
                <button className="qs_Button qs_Button--dark">See all features</button>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--dark">See all features</button>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Red</h3>
              <div className="sample">
                <button className="qs_Button qs_Button--red">Delete</button>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--red">Delete</button>`
                  }
                </CodeBlock>
              </div>
            </li>
          </ul>
        </section>
        <section className="bgMedium pageSection">
          <h2>Size Variations</h2>
          <ul className="examplesList">
            <li>
              <h3>Standard</h3>
              <div className="sample">
                <button className="qs_Button qs_Button--green">Sign up</button>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--dark">Contact Us</button>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Small</h3>
              <div className="sample">
                <button className="qs_Button qs_Button--green qs_Button--small">Sign up</button>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--green qs_Button--small">Sign up</button>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Tiny</h3>
              <div className="sample">
                <button className="qs_Button qs_Button--green qs_Button--tiny">Sign up</button>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--green qs_Button--tiny">Sign up</button>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Full Width</h3>
              <div className="sample">
                <button className="qs_Button qs_Button--green qs_Button--fullwidth">Sign up</button>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--green qs_Button--fullwidth">Sign up</button>`
                  }
                </CodeBlock>
              </div>
            </li>
          </ul>
        </section>
        <section className="bgLight pageSection">
          <h2>Styles Variations</h2>
          <ul className="examplesList">
            <li>
              <h3>Standard</h3>
              <div className="sample">
                <button className="qs_Button qs_Button--green">Sign up</button>
              </div>
              <div className="sample">
                <button className="qs_Button qs_Button--dark">Contact Us</button>
              </div>
              <div className="sample">
                <button className="qs_Button qs_Button--red">Delete</button>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--green">Sign up</button>
<button class="qs_Button qs_Button--red">Delete</button>
<button class="qs_Button qs_Button--dark">Contact Us</button>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Outline</h3>
              <div className="sample">
                <button className="qs_Button qs_Button--green qs_Button--outline">Sign Up</button>
              </div>
              <div className="sample">
                <button className="qs_Button qs_Button--red qs_Button--outline">Delete</button>
              </div>
              <div className="sample">
                <button className="qs_Button qs_Button--dark qs_Button--outline">Contact us</button>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
                <CodeBlock language="html">
                  {
                    `<button class="qs_Button qs_Button--green qs_Button--outline">Sign Up</button>
<button class="qs_Button qs_Button--red qs_Button--outline">Delete</button>
<button class="qs_Button qs_Button--dark qs_Button--outline">Contact Us</button>`
                  }
                </CodeBlock>
              </div>
            </li>
            <li>
              <h3>Disabled</h3>
              <div className="sample">
                <button className="qs_Button qs_Button--red qs_Button--disabled">Delete</button>
              </div>
              <p>Usage:</p>
              <div className="qs_CodeBlock">
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
