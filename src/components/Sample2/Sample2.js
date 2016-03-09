import React, { Component } from 'react';
import CodeBlock from '../CodeBlock';

import './Sample2.scss';

export class Sample2 extends Component {

  state = {
    classSize: 'qs_Base--16'
  };

  render() {
    return (
      <div className={this.state.classSize}>
        <div className="fontSizeSwitcher qs_Bg--lightgray">
          <label htmlFor="fontSizeOptions">Base:</label>
          <div className="qs_Input qs_Select">
            <select
              name="fontSizeOptions"
              id="fontSizeOptions"
              onChange={this.switchFontSize.bind(this)}>
              <option value="16">16px</option>
              <option value="18">18px</option>
              <option value="20">20px</option>
            </select>
          </div>
        </div>
        <section className="qs_PageSection qs_Center qs_Bg--darkgray">
          <div className="qs_PageSection__container">
            <h1 className="qs_PageTitle">Get Fuse</h1>
          </div>
        </section>
        <section className="qs_PageSection qs_Bg--white">
          <div className="qs_PageSection__container qs_Center">
            <p className="qs_Entry">Fuse Free is the free edition of our data platform that you can use for non-commercial purposes.
You can use it at no cost for as long as you want.</p>
            <p className="qs_Entry">Your Access Token is:</p>
            <div className="qs_Input">
              <input className="qs_Center" type="text" name="example1" id="example1" value="08896316e74945129367c4d123456789"/>
            </div>
          </div>
        </section>

        <section className="qs_PageSection qs_Bg--lightgray">
          <div className="qs_PageSection__container">
            <h2 className="qs_Center">Get Started</h2>
            <p className="qs_Entry qs_Center">To get and run Fuse, you need to have Docker installed on your system *. Follow the instructions on the Docker website.</p>
            <ol>
              <li>
                <p>Login to our Docker registry</p>
                <div className="qs_CodeBlock">
                  <CodeBlock language="bash">
                    {
                      `$ docker login -u 'token' -p 08896316e74945129367c4d123456789 -e 'me@company.com' docker.qsensei.com`
                    }
                  </CodeBlock>
                </div>
              </li>
              <li>
                <p>What’s next?</p>
                <p>To get you started easily we provide a step by step Tutorial to guide you through the process of creating your first Fuse powered data app. In addition, take a look at our Documentation to get a more in depth view into the basics of deploying and setting up Fuse.</p>
                <p className="qs_Mediumgray qs_Center"><em>* Other System requirements can be found <a href="#">here</a> in our Documentation.</em></p>
              </li>
            </ol>
          </div>
        </section>

        <section className="qs_PageSection qs_Bg--white">
          <div className="qs_PageSection__container qs_Center">
            <h2>Discover Fuse Professional</h2>
            <p className="qs_Entry">Want to build data apps with replication over several servers? Want to understand the impact your data apps have on your organization? Want to use advanced Data Services to improve data ingest and data preparation? Fuse Professional is our solution for advanced data needs.</p>
            <div className="button-row">
              <button className="qs_Button qs_Button--dark qs_Button--outline">browse all features</button>
              <button className="qs_Button qs_Button--dark qs_Button--outline">view pricing plans</button>
            </div>
          </div>
        </section>

        <section className="qs_PageSection qs_Bg--darkgray">
          <div className="qs_PageSection__container qs_Center">
            Footer…
          </div>
        </section>
      </div>
    );
  }

  switchFontSize(event) {
    this.setState({
      classSize: `qs_Base--${event.target.value}`
    });
  }
}
