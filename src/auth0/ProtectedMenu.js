import React from 'react';
import AuthenticationGuard from './authenticationGuard';
import Menu from '../pages/Menu';

const ProtectedMenu = () => {
  return (
    <AuthenticationGuard>
      <Menu />
    </AuthenticationGuard>
  );
};

export default ProtectedMenu;