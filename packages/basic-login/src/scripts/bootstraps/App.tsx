import * as React from 'react';
import { GlobalHeader } from '../components/GlobalHeader';
import { Home } from '../pages/Home';
import { PrivateRoute } from '../components/PrivateRoute';
import { Profile } from '../pages/Profile';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from '..';
import { useAuth0 } from '../AuthClient';

export const App = () => {
  const { loading } = useAuth0();

  return loading ? (
    <div>loading...</div>
  ) : (
    <>
      <GlobalHeader />
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </>
  );
};
