import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './home';
import Quote from './quotes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/calculator" component={App} />
      <Route exact path="/" component={Home} />
      <Route exact path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
