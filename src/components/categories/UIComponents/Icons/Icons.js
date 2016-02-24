import React, { Component } from 'react';
import CodeBlock from '../../../CodeBlock';

import agile from './images/agile.png';
import manager from './images/manager.png';
import control from './images/control.png';
import core from './images/core.png';
import services from './images/services.png';
import efficient from './images/efficient.png';
import flexible from './images/flexible.png';
import group from './images/group.png';
import paperplane from './images/paperplane.png';
import free from './images/free.png';
import professional from './images/professional.png';
import support from './images/support.png';
import usage from './images/usage.png';
import visualization from './images/visualization.png';

require('./Icons.scss');

export class Icons extends Component {
  render() {
    return (
      <div>
        <section className="qs_Bg--white pageSection">
          <ul className="iconsList">
            <li>
              <p>Agility</p>
              <img src={agile} alt="icon" className="Icon"/>
            </li>
            <li>
              <p>Control</p>
              <img src={control} alt="icon" className="Icon"/>
            </li>
            <li>
              <p>Efficiency</p>
              <img src={efficient} alt="icon" className="Icon"/>
            </li>
            <li>
              <p>Fuse Core</p>
              <img src={core} alt="icon" className="Icon"/>
            </li>
            <li>
              <p>Data Services</p>
              <img src={services} alt="icon" className="Icon"/>
            </li>
            <li>
              <p>Visualization</p>
              <img src={visualization} alt="icon" className="Icon"/>
            </li>
            <li>
              <p>Fuse Manager</p>
              <img src={manager} alt="icon" className="Icon"/>
            </li>
            <li>
              <p>Usage Statistics</p>
              <img src={usage} alt="icon" className="Icon"/>
            </li>
            <li>
              <p>Support</p>
              <img src={support} alt="icon" className="Icon"/>
            </li>
            <li>
              <p>Community</p>
              <img src={group} alt="icon" className="Icon"/>
            </li>
            <li>
              <p>Contact</p>
              <img src={paperplane} alt="icon" className="Icon"/>
            </li>
            <li>
              <p>Pricing Free</p>
              <img src={free} alt="icon" className="Icon"/>
            </li>
            <li>
              <p>Pricing Professional</p>
              <img src={professional} alt="icon" className="Icon"/>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}
