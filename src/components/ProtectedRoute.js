import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Preloader from './Preloader/Preloader';

const ProtectedRoute = ({ component: Component, ...props }) => (
  <Route>
    {() => {
      if (props.isLoggedIn === undefined) {
        return <Preloader />;
      }
      return props.isLoggedIn ? <Component {...props} /> : <Redirect to='/' />;
    }
    }
  </Route>
);

export default ProtectedRoute;
