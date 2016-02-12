import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router';

import { App } from './App';

import DesignElements from './components/categories/DesignElements/';
import Colors from './components/categories/DesignElements/Colors/';
import Typography from './components/categories/DesignElements/Typography/';

import UIComponents from './components/categories/UIComponents/';


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route
        path="design_elements"
        component={DesignElements}
      >
        <Route path="colors" component={Colors} />
        <Route path="typography" component={Typography} />
      </Route>
      <Route
        path="ui_components"
        component={UIComponents}
        >
        {/* <Route path="buttons" component={Buttons} />
        <Route path="form_elements" component={FormElements} />*/}
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));
