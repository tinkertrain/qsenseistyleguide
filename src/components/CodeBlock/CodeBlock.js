import React, { Component } from 'react';
import hljs from 'highlight.js';

require('../../../node_modules/highlight.js/styles/monokai-sublime.css');

export class CodeBlock extends Component {
  componentDidMount() {
    hljs.highlightBlock(this.refs.code);
  }

  render() {
    const { language } = this.props;

    return (
      <pre>
        <code ref="code" className={language}>
          {this.props.children}
        </code>
      </pre>
    );
  }
}
