import React, { Component } from 'react';
import CodeBlock from '../../../CodeBlock';

export class Layout extends Component {
  render() {
    return (
      <div>
        <section className="qs_Bg--white pageSection">
          <h2>Page Sections: Header</h2>
          <p>Usage:</p>
          <div className="qs_CodeBlock">
            <CodeBlock language="html">
                {`<section className="qs_PageSection qs_Center qs_Bg--darkgray">
  <div className="qs_PageSection__container">
    <h1 className="qs_PageTitle">What You Get</h1>
  </div>
</section>`}
            </CodeBlock>
          </div>
          <p>Sample:</p>
          <div className="sample">
            <section className="qs_PageSection qs_Center qs_Bg--darkgray">
              <div className="qs_PageSection__container">
                <h1 className="qs_PageTitle">What You Get</h1>
              </div>
            </section>
          </div>
        </section>
        <section className="qs_Bg--lightgray pageSection">
          <h2>Page Sections: Content</h2>
          <p>Page sections are used for to place content on pages, they stretch the full width of their parent container.</p>
          <p>Usage:</p>
          <div className="qs_CodeBlock">
            <CodeBlock language="html">
                {`<section className="qs_PageSection">
  <div className="qs_PageSection__container">
    <p>Some content</p>
  </div>
</section>`}
            </CodeBlock>
          </div>
          <p>Use background helper classes to give each section a different background color</p>
          <p>Example:</p>
          <div className="qs_CodeBlock">
            <CodeBlock language="html">
                {`<section className="qs_PageSection qs_Bg--darkgray">
  <div className="qs_PageSection__container">
    <p>Some content</p>
  </div>
</section>`}
            </CodeBlock>
          </div>
          <p>Available background color classes are:</p>
          <ul>
            <li>Transparent: <code className="qs_CodeInline">.qs_Bg--clear</code></li>
            <li>White: <code className="qs_CodeInline">.qs_Bg--white</code></li>
            <li>Light Gray: <code className="qs_CodeInline">.qs_Bg--lightgray</code></li>
            <li>Medium Gray: <code className="qs_CodeInline">.qs_Bg--mediumgray</code></li>
            <li>Dark Gray: <code className="qs_CodeInline">.qs_Bg--darkgray</code></li>
          </ul>
          <p>Sample:</p>
          <div className="sample">
            <section className="qs_PageSection qs_Bg--mediumgray">
              <div className="qs_PageSection__container">
                <h1 className="qs_Center">Some section</h1>
                <p className="qs_Entry qs_Center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </section>
            <section className="qs_PageSection qs_Bg--white">
              <div className="qs_PageSection__container">
                <h1 className="qs_Center">Another section</h1>
                <p className="qs_Entry qs_Center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </section>
            <section className="qs_PageSection qs_Bg--mediumgray">
              <div className="qs_PageSection__container">
                <h1 className="qs_Center">One more section</h1>
                <p className="qs_Entry qs_Center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </section>
          </div>
        </section>
      </div>
    );
  }
}
