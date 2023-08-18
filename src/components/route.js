import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Homepage from './Homepage';
import Quote from './quotes';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/calculator" component={App} />
      <Route exact path="/" component={Homepage} />
      <Route exact path="/quote" component={Quote} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
