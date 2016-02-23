import React, { Component } from 'react';
import { splitAndCapitalize } from '../../../utils/utils';

require('./Container.scss');

export class Container extends Component {
  render() {
    const { location } = this.props;
    const currentPathArray = location.pathname.split('/');
    const currentPath = splitAndCapitalize(currentPathArray[currentPathArray.length - 1]);
    const parentPath = splitAndCapitalize(currentPathArray[currentPathArray.length - 2]);
    const path = parentPath ? `${parentPath}: ${currentPath}` : currentPath;

    return (

      <div>
        <header className="containerHeader">
          <h1>{path}</h1>
        </header>
        <section className="main">
        {
          this.props.children || (
          <section className="bgLight pageSection">
            {
              path === 'Design Elements' ?
              (<div>
                <p>Styles and helpers to ensure consistency across the website and other projects.</p>
              </div>) : null
            }
            {
              path === 'Ui Components' ?
              (<p>Styling UI Components is done via opt-in classes, and to avoid collision with other libraries or custom stylings, all Q-Sensei classes are prefixed with "qs_"</p>) : null
            }
          </section>
        )}
        </section>
      </div>
    );
  }
}
