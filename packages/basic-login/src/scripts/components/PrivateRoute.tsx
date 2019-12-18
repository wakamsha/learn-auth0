import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { useAuth0 } from '../AuthClient';

type Props = RouteProps;

export const PrivateRoute = ({ component: Component, path, ...rest }: Props) => {
  const { authenticated, loginWithRedirect } = useAuth0();

  React.useEffect(() => {
    (async () => {
      if (authenticated) return;
      await loginWithRedirect({
        appState: { targetUrl: path },
      });
    })();
  }, [authenticated, loginWithRedirect, path]);

  const render = React.useCallback(props => (authenticated && !!Component ? <Component {...props} /> : null), [
    Component,
    authenticated,
  ]);

  return <Route path={path} render={render} {...rest} />;
};
