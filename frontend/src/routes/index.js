import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Properties from '../pages/Properties';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact />
        <Route path="/propriedades" component={Properties} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
