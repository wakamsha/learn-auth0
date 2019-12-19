import * as React from 'react';
import { Auth0Provider, useAuth0 } from './AuthClient';
import { Guest } from './bootstraps/Guest';
import { Member } from './bootstraps/Member';
import { createBrowserHistory } from 'history';
import { render } from 'react-dom';

const config = {
  domain: 'wakamsha-hello.auth0.com',
  clientId: 'DbDIMeAWeKAZ0Bm07TO0NKSZKiC7261c',
};

export const history = createBrowserHistory();

const Some = () => {
  const { authenticated } = useAuth0();
  return authenticated ? <Member /> : <Guest />;
};

const App = () => {
  const { loading } = useAuth0();
  const onRedirectCallback = (appState?: any) => history.push(appState?.targetUrl || window.location.pathname);

  return loading ? (
    <div>おまちください</div>
  ) : (
    <Auth0Provider
      domain={config.domain}
      clientId={config.clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <Some />
    </Auth0Provider>
  );
};

render(<App />, document.getElementById('app'));
