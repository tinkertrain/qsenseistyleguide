import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App } from './App';
import { Home } from './components/Home/Home';
import Container from './components/categories/Container';

import Colors from './components/categories/DesignElements/Colors/';
import Typography from './components/categories/DesignElements/Typography/';

import Buttons from './components/categories/UIComponents/Buttons/';
import FormElements from './components/categories/UIComponents/FormElements/';
import Code from './components/categories/UIComponents/Code/';
import Layout from './components/categories/UIComponents/Layout/';
import Icons from './components/categories/UIComponents/Icons/';

import Sample from './components/Sample';
import Sample2 from './components/Sample2';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>

    <Route path="design_elements" component={Container}>
      <Route path="colors" component={Colors} />
      <Route path="typography" component={Typography} />
    </Route>

    <Route path="ui_components" component={Container}>
      <Route path="buttons" component={Buttons} />
      <Route path="form_elements" component={FormElements} />
      <Route path="code" component={Code} />
      <Route path="layout" component={Layout} />
      <Route path="icons" component={Icons} />
    </Route>

    <Route path="sample" component={Sample} />
    <Route path="sample2" component={Sample2} />
  </Route>

);
