import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private';
// import Home from './Home/Home';
import Login from './Login/Login';
import App from  '../App'

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <RoutesPrivate path="/" component={App} />
      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;
