import * as React from 'react';
import Auth0Client from '@auth0/auth0-spa-js/dist/typings/Auth0Client';
import createAuth0Client from '@auth0/auth0-spa-js';

type Props = {
  children: React.ReactNode;
  domain: string;
  clientId: string;
  redirectUri: string;
  onRedirectCallback: (appState?: any) => void;
};

type User = {
  nickname: string;
  name: string;
  picture: string;
  email: string;
  email_verified: string;
  sub: string;
};

type ContextType = {
  user: User;
  loading: boolean;
  authenticated: boolean;
  popupOpen: boolean;
  loginWithPopup: (params: PopupLoginOptions) => Promise<void>;
} & Pick<Auth0Client, 'loginWithRedirect' | 'getIdTokenClaims' | 'getTokenSilently' | 'getTokenWithPopup' | 'logout'> &
  Partial<Pick<Auth0Client, 'getUser'>>;

const Auth0Context = React.createContext<ContextType>(({} as unknown) as ContextType);

export const useAuth0 = () => React.useContext(Auth0Context);

export const Auth0Provider = ({ children, domain, clientId, redirectUri, onRedirectCallback }: Props) => {
  const [authenticated, setAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState<User>({} as User);
  const [auth0Client, setAuth0Client] = React.useState(({} as unknown) as ContextType);
  const [loading, setLoading] = React.useState(false);
  const [popupOpen, setPopupOpen] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const auth0FromHook = await createAuth0Client({ domain, client_id: clientId, redirect_uri: redirectUri });
      setAuth0Client((auth0FromHook as unknown) as ContextType);

      if (window.location.search.includes('code=')) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const authenticated = await auth0FromHook.isAuthenticated();
      setAuthenticated(authenticated);

      if (authenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }

      setLoading(false);
    })();
  }, [clientId, domain, onRedirectCallback, redirectUri]);

  const loginWithPopup = async (params: PopupLoginOptions) => {
    setPopupOpen(true);
    try {
      await auth0Client?.loginWithPopup(params);
    } catch (e) {
      console.error(e);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser?.();
    setLoading(false);
    setAuthenticated(true);
    setUser(user);
  };

  return (
    <Auth0Context.Provider
      value={{
        user,
        loading,
        popupOpen,
        loginWithPopup,
        authenticated,
        getIdTokenClaims: (o: getIdTokenClaimsOptions) => auth0Client.getIdTokenClaims(o),
        loginWithRedirect: (o?: RedirectLoginOptions) => auth0Client.loginWithRedirect(o),
        getTokenSilently: (o?: GetTokenSilentlyOptions) => auth0Client.getTokenSilently(o),
        getTokenWithPopup: (o?: GetTokenWithPopupOptions) => auth0Client.getTokenWithPopup(o),
        logout: (o?: LogoutOptions) => auth0Client.logout(o),
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
