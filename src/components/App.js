import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import Navbar from './nvbar';
import Calculator from '../pages/Calculator';
import Quotes from '../pages/Quotes';

const App = () => (
  <BrowserRouter>
    <div>
      <>
        <Navbar />
        <Switch>
          <Route exact path="/calculator" component={Calculator} />
          <Route exact path="/quote" component={Quotes} />
        </Switch>
      </>
    </div>
  </BrowserRouter>
);

export default App;
