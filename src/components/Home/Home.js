import React, { Component } from 'react';
import { Link } from 'react-router';

import CodeBlock from '../CodeBlock';

export class Home extends Component {
  render() {
    return (
      <div>
        <section className="bgLight pageSection">
          <h1 className="qs_Center">Style Guide</h1>
          <p className="qs_Entry qs_Center">
            <strong>qsstyles</strong> is crafted to give consistency and make the process of sharing styles across the website and other projects at Q-Sensei simpler.
          </p>
          <p>
            The style guide consists of a series of stylesheets written in <a href="http://www.sass-lang.com">sass</a> that can be easy to bring into any project.
          </p>
          <p>
            With this style guide we also take care of accesibility issues, so styles for elements that need <em>hover</em>, <em>active</em>, <em>focus</em>, <em>visited</em> and other states are taken care of.
          </p>
          <h3>Dependencies</h3>
          <p><strong>qsstyles</strong> has a dependency on the CSS library <a href="https://necolas.github.io/normalize.css/">Normalize</a> to ensure styling across browsers is consistent, the only other dependency is <a href="https://highlightjs.org/">highlightjs</a>, needed only if the CodeBlock element is used (see <Link to="/ui_components/code">Code</Link>)</p>

          <h3>Usage</h3>
          <p>The simplest way to use it, is to first we include <em>Normalize</em>, and then add the reference to the file <code className="qs_CodeInline">qsstyles.min.css</code> found in the <code className="qs_CodeInline">dist/</code> folder into an html file.</p>
          <p>Like so:</p>
          <div className="qs_CodeBlock">
            <CodeBlock language="html">
              {
                `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>Example</title>
  <!-- Normalize from cdn -->
  <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.css">

  <!-- qsstyles minimized -->
  <link rel="stylesheet" href="/qsstyles/dist/qsstyles.min.css"/>
</head>
<body></body>
</html>`
              }
            </CodeBlock>
          </div>
          <p><strong>qsstyles</strong> is really small, but even so, sometimes not everything that includes is necessary, for these cases the scss source files can be used.</p>
          <p>All that is needed to make a custom build (for this NodeJS and npm must be installed), is to have a look at <code className="qs_CodeInline">main.scss</code>, comment out any unneeded sections and build.</p>
          <p><em>main.scss</em>:</p>
          <div className="qs_CodeBlock">
            <CodeBlock language="sass">
              {
                `@import "fontFaces";

@import "palette";
@import "fonts";

@import "global";
@import "typography";
// @import "code"; Code might not always be needed...
@import "buttons";
@import "formElements";
`
              }
            </CodeBlock>
          </div>
          <p>To compile the custom build, install npm dependencies and run the command: <code className="qs_CodeInline">npm run build</code></p>
          <div className="qs_CodeBlock">
            <CodeBlock language="bash">
              {
                `> npm install
> npm run build`
              }
            </CodeBlock>
          </div>
        </section>
      </div>
    );
  }
}
