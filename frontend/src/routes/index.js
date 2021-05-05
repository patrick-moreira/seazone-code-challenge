import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Properties from '../pages/Properties';
import Details from '../pages/Details';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact />
        <Route path="/propriedades" exact component={Properties} />
        <Route path="/propriedades/detalhes/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
