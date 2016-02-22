import React, { Component } from 'react';
import CodeBlock from '../../../CodeBlock';

require('./Typography.scss');

export class Typography extends Component {
  render() {
    return (
      <div>
        <section className="bgLight pageSection">
          <p>Found in <code className="qs_codeInline">_typography.scss</code></p>
          <h2>Font Families</h2>
          <p>We use 3 typefaces at Q-Sensei:</p>
          <ul className="examplesList">
            <li>
              <p className="serif big">The quick, brown fox.</p>
              Serif: Utopia Std, available with the sass variable: <code className="qs_codeInline">{`$serif: 'utopia-std', 'Georgia', serif;`}</code>
            </li>
            <li>
              <p className="sansserif big">The quick, brown fox.</p>
              Sans Serif: Sharp Sans Semibold, available with the sass variable: <code className="qs_codeInline">{`$sansserif: 'sharp', sans-serif;`}</code>
            </li>
            <li>
              <p className="monospace big">The quick, brown fox.</p>
              Monospace: available with the sass variable: <code className="qs_codeInline">{`$monospace: Monaco, Consolas, 'Ubuntu Mono', Cantarell, monospace;`}</code>
            </li>
          </ul>
        </section>

        <section className="bgMedium pageSection">
          <h2>Sizing</h2>
          <p>We use <code className="qs_codeInline">rem</code> units with a pixel fallback for maximum flexibility. We define a base font size of <code className="qs_codeInline">62.5%</code> to have the convenience of sizing rems in a way that is similar to using <code className="qs_codeInline">px</code>.</p>
          <p>Example:</p>
          <div className="qs_codeBlock">
            <CodeBlock language="css">
              {
                `html {
  font-size: 62.5%;
}
.someClass {
  font-size: 14px; /* Fallback */
  font-size: 1.4rem; /* =14px */
}
.someOtherClass {
  font-size: 24px; /* Fallback */
  font-size: 2.4rem; /* =24px */
}`
              }
            </CodeBlock>
          </div>
        </section>

        <section className="bgLight pageSection">
          <h2>Headings</h2>
          <p>All headings use the sans serif typeface (sharp semibold).</p>
          <ul className="examplesList">
            <li>
              <h1 className="qs_heading">Heading 1: The quick, brown fox</h1>
                <div>
                  <p>Usage:</p>
                  <div className="qs_codeBlock">
                    <CodeBlock language="html">
                      {`<h1>The quick, brown fox</h1>
<!-- Optionally use the class "qs_heading1" -->`}
                    </CodeBlock>
                  </div>
                </div>
            </li>
            <li>
              <h2 className="qs_heading">Heading 2: The quick, brown fox</h2>
                <div>
                  <p>Usage:</p>
                  <div className="qs_codeBlock">
                    <CodeBlock language="html">
                        {`<h2>The quick, brown fox</h2>
<!-- Optionally use the class "qs_heading2" -->`}
                    </CodeBlock>
                  </div>
                </div>
            </li>
            <li>
              <h3 className="qs_heading">Heading 3: The quick, brown fox</h3>
                <div>
                  <p>Usage:</p>
                  <div className="qs_codeBlock">
                    <CodeBlock language="html">
                        {`<h3>The quick, brown fox</h3>
<!-- Optionally use the class "qs_heading3" -->`}
                      </CodeBlock>
                  </div>
                </div>
            </li>
            <li>
              <h4 className="qs_heading">Heading 4: The quick, brown fox</h4>
                <div>
                  <p>Usage:</p>
                  <div className="qs_codeBlock">
                    <CodeBlock language="html">
                        {`<h4>The quick, brown fox</h4>
<!-- Optionally use the class "qs_heading4" -->`}
                      </CodeBlock>
                  </div>
                </div>
            </li>
          </ul>
        </section>

        <section className="bgMedium pageSection">
          <h2>Page Titles</h2>
          <h1>The quick, brown fox.</h1>
          <p>Used only for the header of each page, always an <code className="qs_codeInline">h1</code> with a class of <code className="qs_codeInline">.qs_pageTitle</code></p>
          <div>
            <p>Usage:</p>
            <div className="qs_codeBlock">
              <CodeBlock language="html">
                  {`<h1 class="qs_pageTitle">The quick, brown fox</h4>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="bgLight pageSection">
          <h2>Body copy</h2>
          <p>Sets the font family to $serif, the size to 16px - 1.6 rem and the line height to 1.5</p>
          <p>To get <strong>bold text</strong>, wrap with a <code className="qs_codeInline">strong</code> element</p>
          <p>For <em>italics</em>, use <code className="qs_codeInline">em</code></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div>
            <p>Usage:</p>
            <div className="qs_codeBlock">
              <CodeBlock language="html">
                  {`<p>Sets the font family to $serif, the size to 16px - 1.6 rem and the line height to 1.5</p>
<p>To get <strong>bold text</strong>, wrap with a strong element</p>
<p>For <em>italics</em> use em</p>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="bgMedium pageSection">
          <h2>Entry body copy</h2>
          <p>For an intro to a section that needs to be emphacized.</p>
          <p className="qs_entry">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div>
            <p>Usage:</p>
            <div className="qs_codeBlock">
              <CodeBlock language="html">
                  {`<p class="qs_entry">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className="bgLight pageSection">
          <h2>Links</h2>
          <p>All link states are taken into consideration and fully styled.</p>
          <ul>
            <li>
              <a href="#" className="noState">Link example</a>
            </li>
            <li>
              <a href="#" className="mouseOver">Mouse Over</a>
            </li>
            <li>
              <a href="#" className="active">Active</a>
            </li>
            <li>
              <a href="#" className="focused">Focused</a>
            </li>
            <li>
              <a href="#" className="visited">Visited</a>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
