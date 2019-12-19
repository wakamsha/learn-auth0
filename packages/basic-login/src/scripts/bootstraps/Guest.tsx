import * as React from 'react';
import { GlobalHeader } from '../components/GlobalHeader';
import { LandingPage } from '../pages/Landing';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from '..';

export const Guest = () => (
  <>
    <GlobalHeader />
    <Router history={history}>
      <Switch>
        <Route component={LandingPage} />
      </Switch>
    </Router>
  </>
);
