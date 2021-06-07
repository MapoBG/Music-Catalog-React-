import { Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/Login';

import Navigation from './components/Navigation';
import Register from './components/Register';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <Navigation />

      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
}

export default App;