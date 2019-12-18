import * as React from 'react';
import { useAuth0 } from '../AuthClient';

export const GlobalHeader = () => {
  const { user, authenticated, loginWithRedirect, logout } = useAuth0();

  const handleClickLogin = React.useCallback(() => loginWithRedirect({ returnTo: window.location.origin }), [
    loginWithRedirect,
  ]);
  const handleClickLogout = React.useCallback(() => logout({ returnTo: window.location.origin }), [logout]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1 className="navbar-item">Basic Login</h1>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <div className="navbar-item">
            {authenticated && user ? (
              <>
                <figure className="image is-24x24">
                  <img className="is-rounded" src={user.picture} alt="Profile" />
                </figure>
                <span>{user.name}</span>
              </>
            ) : null}
          </div>
          <div className="navbar-item">
            <div className="buttons">
              {authenticated ? (
                <button className="button is-primary" onClick={handleClickLogout}>
                  Log out
                </button>
              ) : (
                <button className="button is-primary" onClick={handleClickLogin}>
                  Log in
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
