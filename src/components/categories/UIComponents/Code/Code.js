import React, { Component } from 'react';
import CodeBlock from '../../../CodeBlock';

export class Code extends Component {
  render() {
    return (
      <div>
        <section className="qs_Bg--white pageSection">
          <p>Found in <code className="qs_CodeInline">_code.scss</code></p>
          <h2>Inline Code</h2>
          <p>Something like <code className="qs_CodeInline">font-size: 1.6rem;</code>.</p>
          <div>
            <p>Usage:</p>
            <div className="qs_CodeBlock">
              <CodeBlock language="html">
                  {`<p>Something like: <code class="qs_CodeInline">font-size: 1.6rem;</code></p>`}
              </CodeBlock>
            </div>
          </div>
        </section>
        <section className="qs_Bg--lightgray pageSection">
          <h2>Code Blocks</h2>
          <p>To use Code Blocks with syntax highlighting, the library <a href="https://highlightjs.org/">highlightjs</a> must be included, for the theme we use <code className="qs_CodeInline">monokai-sublime</code></p>
          <div className="qs_CodeBlock">
            <CodeBlock language="javascript">
              {`var myArray = [0, 1, 2];`}
            </CodeBlock>
          </div>
          <div>
            <p>Usage</p>
            <div className="qs_CodeBlock">
              <CodeBlock language="html">
                  {`<div class="qs_CodeBlock">
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
