import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';

import './App.css';

import Layout from './components/Layout/Layout';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';

import AuthContext from './services/context';
import * as data from './services/data';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);

  return (
    <AuthContext.Provider value={{isLoggedIn: loggedIn, login, logout}}>
      <Navigation />
      <Layout>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={ErrorPage} />
        </Switch>
      </Layout>
    </AuthContext.Provider >
  );
}

export default App;