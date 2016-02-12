import React, { Component } from 'react';


export class DesignElements extends Component {
  render() {
    return (
      <div>
        <h2>Design Elements!</h2>
        {this.props.children || (
          <p>Design Elements description could go here, or not</p>
        )}
      </div>
    );
  }
}
