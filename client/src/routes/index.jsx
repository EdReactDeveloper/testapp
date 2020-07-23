import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import HeaderFooter from '../containers/HeaderFooter';
import Login from '../containers/Login'; 
import Register from '../containers/Register'; 
import User from '../containers/User'; 
import Alert from '../containers/Alert';

const Routes = () => {

  return (
    <Router>
      <HeaderFooter>
      <Alert />
        <Switch>
          <PrivateRoute exact path="/" component={User}/>
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />
        </Switch>
      </HeaderFooter>
    </Router>
  );
};

export default Routes;