import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../layout/Layout';
import TestReactRouter from '../components/TestReactRouter';
import Homepage from '../components/Homepage';
import TestReactRouterRedirect from '../components/TestReactRouterRedirect';
import RouterCommentScreen from '../components/RouterCommentScreen';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute
      component={Homepage}
    />
    <Route
      path="react-router"
      component={TestReactRouter}
    />
    <Route
      path="react-router/redirect"
      component={TestReactRouterRedirect}
      onEnter={TestReactRouterRedirect.checkAuth}
    />
  </Route>
);
