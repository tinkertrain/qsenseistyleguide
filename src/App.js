import React, { Component } from 'react';
import {TransitionMotion, spring, presets} from 'react-motion';
import { debounce } from './utils/utils';
import Sidebar from './components/Sidebar/';
import { Header } from './components/Header/Header';

require('./App.scss');

export class App extends Component {

  state = {
    transitionDirection: 1
  };

  componentWillReceiveProps({location: {state}}) {
    const numState = state || 0;
    const _state = this.props.location.state;

    if (numState > _state) {
      this.setState({transitionDirection: -1});
    }
    else {
      this.setState({transitionDirection: 1});
    }
  }

  willEnter = () => {
    const toLeft = this.state.transitionDirection < 0;

    return {
      left: toLeft ? 100 : 0,
      opacity: 0,
      scale: 1
    };
  };

  willLeave = () => {
    const toLeft = this.state.transitionDirection < 0;

    return {
      left: toLeft ? spring(0, presets.stiff) : spring(100, presets.stiff),
      opacity: spring(0),
      scale: spring(1)
    };
  };


  getStyles = () => {
    const { children, location } = this.props;
    const { pathname, state } = location;

    return [{
      data: {
        handler: React.cloneElement(children, {direction: this.state.transitionDirection}),
        state
      },
      style: {
        left: spring(50, presets.stiff),
        opacity: spring(1),
        scale: spring(1)
      },
      key: pathname
    }];
  };

  render() {
    const { content, sidebar, location } = this.props;

    return (
      <div>
        <Header />
        <div className="container">
          <section className="main">
            <TransitionMotion
              styles={this.getStyles()}
              willEnter={this.willEnter}
              willLeave={this.willLeave}
            >
              {styles =>
                <div>
                  {styles.map(({key, style, data}) => {
                    if (this._content && style.left === 50) {
                      document.querySelector('.main').style.height = `${this._content.offsetHeight}px`;
                    }
                    return (
                      <div
                      ref={(c) => this._content = c}
                      key={key}
                      style={{
                        left: `${style.left}%`,
                        position: 'absolute',
                        width: '100%',
                        opacity: style.opacity,
                        transform: `scale(${style.scale}) translateX(-50%)`
                      }}
                      >
                       {data.handler}
                     </div>
                    );
                  }
                  )}
                </div>
              }
            </TransitionMotion>
          </section>
          {
            location.pathname.indexOf('sample') === -1 ?
            <aside className="sidebar">
              <Sidebar location={location.pathname}/>
            </aside> : null
          }
        </div>
        <footer className="footer">&copy; 2016</footer>
      </div>
    );
  }

  componentDidMount() {
    document.querySelector('.main').style.height = `${this._content.offsetHeight}px`;

    window.addEventListener('resize', debounce(() => {
      document.querySelector('.main').style.height = `${this._content.offsetHeight}px`;
    }, 250));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {
      document.querySelector('.main').style.height = `${this._content.offsetHeight}px`;
    });
  }

}
