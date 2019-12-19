import * as React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../AuthClient';

export const HomePage = () => {
  const { user } = useAuth0();

  return (
    <>
      <h1>Home page</h1>
      <p>{`こんにちは、${user.nickname} さん！`}</p>
      <Link to="/profile">Profile</Link>
    </>
  );
};
