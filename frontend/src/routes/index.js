import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import Properties from '../pages/Properties';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Header />
        <Route path="/" exact />
        <Route path="/properties" exact component={Properties} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
