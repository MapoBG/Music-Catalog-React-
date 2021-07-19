import { Route, Switch } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout';
import Navigation from './components/Navigation';
import Welcome from './components/Welcome';
import Login from './components/Login';
import Register from './components/Register';

import * as data from './services/data';
import { register, login } from './services/user';

// register({ email: "test@abv.bg", password: '12345', name: 'Test' });
// login({ email: "test@abv.bg", password: '12345', name: 'Test' });

function App() {
  return (
    <>
      <Navigation />
      <Layout>
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;