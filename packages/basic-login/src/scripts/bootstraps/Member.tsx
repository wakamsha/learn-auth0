import * as React from 'react';
import { GlobalHeader } from '../components/GlobalHeader';
import { HomePage } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Route, Router, Switch } from 'react-router-dom';
import { history } from '..';
import { useAuth0 } from '../AuthClient';

export const Member = () => {
  const { loading } = useAuth0();

  return loading ? (
    <div>loading...</div>
  ) : (
    <>
      <GlobalHeader />
      <Router history={history}>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/profile" component={Profile} />
          <Route render={() => <div>Not found 🤕</div>} />
        </Switch>
      </Router>
    </>
  );
};
