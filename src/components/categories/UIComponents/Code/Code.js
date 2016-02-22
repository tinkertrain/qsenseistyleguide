import React, { Component } from 'react';
import CodeBlock from '../../../CodeBlock';

export class Code extends Component {
  render() {
    return (
      <div>
        <section className="bgLight pageSection">
          <p>Found in <code className="qs_codeInline">_code.scss</code></p>
          <h2>Inline Code</h2>
          <p>Something like <code className="qs_codeInline">font-size: 1.6rem;</code>.</p>
          <div>
            <p>Usage:</p>
            <div className="qs_codeBlock">
              <CodeBlock language="html">
                  {`<p>Something like: <code class="qs_codeInline">font-size: 1.6rem;</code></p>`}
              </CodeBlock>
            </div>
          </div>
        </section>
        <section className="bgMedium pageSection">
          <h2>Code Blocks</h2>
          <div className="qs_codeBlock">
            <CodeBlock language="javascript">
              {`var myArray = [0, 1, 2];`}
            </CodeBlock>
          </div>
          <div>
            <p>Usage</p>
            <div className="qs_codeBlock">
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
