import React, { Component } from 'react';
import CodeBlock from '../../../CodeBlock';

import styles from './Typography.scss';

export class Typography extends Component {
  render() {
    return (
      <div>
        <section className={`${styles.bgLight} ${styles.pageSection}`}>
          <h2>Sizing</h2>
          <p>We use <code className={styles.qs_codeInline}>rem</code> units with a pixel fallback for maximum flexibility. We define a base font-size of 62.5% to have the convenience of sizing rems in a way that is similar to using px.</p>
          <p>Example:</p>
          <div className={styles.qs_codeBlock}>
            <CodeBlock language="css">
              {
                `html { font-size: 62.5%; }
.someClass { font-size: 1.4rem; } /* =14px */
.someOtherClass   { font-size: 2.4rem; } /* =24px */`
              }
            </CodeBlock>
          </div>
        </section>

        <section className={`${styles.bgMedium} ${styles.pageSection}`}>
          <h2>Font Families</h2>
          <p>We use 3 typefaces at Q-Sensei:</p>
          <ul>
            <li><span className={styles.serif}>Serif</span>: Utopia Std, available with the sass variable: <code className={styles.qs_codeInline}>{`$serif: 'utopia-std', 'Georgia', serif;`}</code></li>
            <li><span className={styles.sansserif}>Sans Serif</span>: Sharp Sans Semibold, available with the sass variable: <code className={styles.qs_codeInline}>{`$sansserif: 'sharp', sans-serif;`}</code></li>
            <li><span className={styles.monospace}>Monospace</span>: available with the sass variable: <code className={styles.qs_codeInline}>{`$monospace: Monaco, Consolas, 'Ubuntu Mono', Cantarell, monospace;`}</code></li>
          </ul>
        </section>

        <section className={`${styles.bgLight} ${styles.pageSection}`}>
          <h2>Headings</h2>
          <p>All headings use the sans serif typeface (sharp semibold).</p>
          <ul className={styles.examplesList}>
            <li>
              <h1 className={styles.qs_heading1}>Heading 1: The quick, brown fox</h1>
                <div>
                  <p>Usage:</p>
                  <div className={styles.qs_codeBlock}>
                    <CodeBlock language="html">
                      {`<h1>The quick, brown fox</h1>
<!-- Optionally use the class "qs_heading1" -->`}
                    </CodeBlock>
                  </div>
                </div>
            </li>
            <li>
              <h2 className={styles.qs_heading2}>Heading 2: The quick, brown fox</h2>
                <div>
                  <p>Usage:</p>
                  <div className={styles.qs_codeBlock}>
                    <CodeBlock language="html">
                        {`<h2>The quick, brown fox</h2>
<!-- Optionally use the class "qs_heading2" -->`}
                    </CodeBlock>
                  </div>
                </div>
            </li>
            <li>
              <h3 className={styles.qs_heading3}>Heading 3: The quick, brown fox</h3>
                <div>
                  <p>Usage:</p>
                  <div className={styles.qs_codeBlock}>
                    <CodeBlock language="html">
                        {`<h3>The quick, brown fox</h3>
<!-- Optionally use the class "qs_heading3" -->`}
                      </CodeBlock>
                  </div>
                </div>
            </li>
            <li>
              <h4 className={styles.qs_heading4}>Heading 4: The quick, brown fox</h4>
                <div>
                  <p>Usage:</p>
                  <div className={styles.qs_codeBlock}>
                    <CodeBlock language="html">
                        {`<h4>The quick, brown fox</h4>
<!-- Optionally use the class "qs_heading4" -->`}
                      </CodeBlock>
                  </div>
                </div>
            </li>
          </ul>
        </section>

        <section className={`${styles.bgMedium} ${styles.pageSection}`}>
          <h2>Page Titles</h2>
          <h1>The quick, brown fox.</h1>
          <p>Used only for the header of each page, always an <code className={styles.qs_codeInline}>h1</code> with a class of <code className={styles.qs_codeInline}>.qs_pageTitle</code></p>
          <div>
            <p>Usage:</p>
            <div className={styles.qs_codeBlock}>
              <CodeBlock language="html">
                  {`<h1 class="qs_pageTitle">The quick, brown fox</h4>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className={`${styles.bgLight} ${styles.pageSection}`}>
          <h2>Body copy</h2>
          <p>The only style applied globally, sets the font family to $serif, the size to 16px - 1.6 rem and the line height to 1.5</p>
          <p>To get <strong>bold text</strong>, wrap with a <code className={styles.qs_codeInline}>strong</code> element</p>
          <p>For <em>italics</em>, use <code className={styles.qs_codeInline}>em</code></p>
          <div>
            <p>Usage:</p>
            <div className={styles.qs_codeBlock}>
              <CodeBlock language="html">
                  {`<p>The only style applied globally, sets the font family to $serif, the size to 16px - 1.6 rem and the line height to 1.5</p>
<p>To get <strong>bold text</strong>, wrap with a strong element</p>
<p>For <em>italics</em> use em</p>`}
              </CodeBlock>
            </div>
          </div>
        </section>

        <section className={`${styles.bgMedium} ${styles.pageSection}`}>
          <h2>Other body copy</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>

        <section className={`${styles.bgLight} ${styles.pageSection}`}>
          <h2>Links</h2>
          <p>Something</p>
          <ul>
            <li>
              <a href="#" className={styles.noState}>Link example</a>
            </li>
            <li>
              <a href="#" className={styles.mouseOver}>Mouse Over</a>
            </li>
            <li>
              <a href="#" className={styles.active}>Active</a>
            </li>
            <li>
              <a href="#" className={styles.focused}>Focused</a>
            </li>
            <li>
              <a href="#" className={styles.visited}>Visited</a>
            </li>
          </ul>
        </section>

        <section className={`${styles.bgMedium} ${styles.pageSection}`}>
          <h2>Code</h2>
          <h4>Inline code</h4>
          <p>Something like <code className={styles.qs_codeInline}>font-size: 1.6rem;</code>.</p>
          <div>
            <p>Usage:</p>
            <div className={styles.qs_codeBlock}>
              <CodeBlock language="html">
                  {`<p>Something like: <code class="qs_codeInline">font-size: 1.6rem;</code></p>`}
              </CodeBlock>
            </div>
          </div>
          <h4>Code Blocks</h4>
          <div className={styles.qs_codeBlock}>
            <CodeBlock language="javascript">
              {`var myArray = [0, 1, 2];`}
            </CodeBlock>
          </div>
          <div>
            <p>Usage</p>
            <div className={styles.qs_codeBlock}>
              <CodeBlock language="html">
                  {`<div class="qs_codeBlock">
  <pre>
    <code class="javascript">
      var myArray = [0, 1, 2];
    </code>
  </pre>
</div>`}
              </CodeBlock>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
