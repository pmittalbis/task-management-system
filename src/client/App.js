import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardContainer from './containers/DashboardContainer';
import LoginContainer from './containers/LoginContainer';
import SignupFormContainer from './containers/SignupFormContainer';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route exact path="/Signup" component={SignupFormContainer} />
          <Route exact path="/Dashboard" component={DashboardContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
