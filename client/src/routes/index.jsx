import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import AuthRoute from './AuthRoute';
import HeaderFooter from '../containers/HeaderFooter';
import Login from '../containers/Login'; 
import Register from '../containers/Register'; 
import User from '../containers/User'; 
import Alert from '../containers/Alert';

const Routes = (props) => {

  const dispatch = useDispatch()
  const {user,loading} = useSelector(state => state.auth)
 
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