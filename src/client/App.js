import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/Signup" component={SignupForm} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
