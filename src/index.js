import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';

import { App } from './App';

import Container from './components/categories/Container';
import Colors from './components/categories/DesignElements/Colors/';
import Typography from './components/categories/DesignElements/Typography/';
import Buttons from './components/categories/UIComponents/Buttons/';
import FormElements from './components/categories/UIComponents/FormElements/';
import Code from './components/categories/UIComponents/Code/';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route
        path="design_elements"
        component={Container}
      >
        <Route path="colors" component={Colors} />
        <Route path="typography" component={Typography} />
      </Route>
      <Route
        path="ui_components"
        component={Container}
        >
        <Route path="buttons" component={Buttons} />
        <Route path="form_elements" component={FormElements} />
        <Route path="code" component={Code} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
