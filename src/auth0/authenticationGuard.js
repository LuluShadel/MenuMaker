import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

const AuthenticationGuard = ({ children }) => {
  const WrappedComponent = withAuthenticationRequired(
    ({ children }) => children,
    {
      onRedirecting: () => <div>Loading...</div>,
    }
  );

  return <WrappedComponent>{children}</WrappedComponent>;
};

export default AuthenticationGuard;