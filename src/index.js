import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, Link } from 'react-router';

import { App } from './App';
import { Category } from './components/Category/Category';
import { CategorySidebar } from './components/CategorySidebar/CategorySidebar';
import { Item } from './components/Item/Item';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="category/:category" components={{ content: Category, sidebar: CategorySidebar }}>
        <Route path=":item" component={Item} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'))
