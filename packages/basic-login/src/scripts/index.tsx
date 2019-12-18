import { Auth0Provider } from './AuthClient';
import { App } from './bootstraps/App';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { render } from 'react-dom';

const config = {
  domain: 'wakamsha-hello.auth0.com',
  clientId: 'DbDIMeAWeKAZ0Bm07TO0NKSZKiC7261c',
};

export const history = createBrowserHistory();

const onRedirectCallback = (appState?: any) => history.push(appState?.targetUrl || window.location.pathname);

render(
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('app'),
);
