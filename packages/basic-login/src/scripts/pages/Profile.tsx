import * as React from 'react';
import { useAuth0 } from '../AuthClient';

export const Profile = () => {
  const { loading, user } = useAuth0();

  return loading ? (
    <div>loading...</div>
  ) : (
    <div>
      <img src={user.picture} alt="Profile" />
      <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
      </ul>
      <pre>
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </div>
  );
};
