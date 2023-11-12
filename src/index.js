import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import Home from "./pages/home/home";

import Menu from './pages/Menu';


//auth0
import { Auth0Provider } from '@auth0/auth0-react';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-axtt8l2sqibaup6s.us.auth0.com"
    clientId="zCDoPfpvcb9mFfNmSdg5ZlvnC6L1GpZH"
    authorizationParams={{
      redirect_uri:"http://localhost:3000/Menu"
    }}
  >
  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path='/Menu' element={<Menu />} />
      </Routes>
    </Router>
    </Auth0Provider>,
  
);
