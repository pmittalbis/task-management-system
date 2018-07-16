import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import Header from './Header';
import Footer from './Footer';
import '../App.css';

class SignupForm extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <label for="name">Full name:</label>
          <input id="name" className="form-control" placeholder="Enter Full name" type="text"/>
          <label for="email">Email:</label>
          <input id="email" className="form-control" placeholder="Enter email" type="email" />
          <label for="password">Password:</label>
          <input id="password" className="form-control" placeholder="Enter password" type="password" />
          <label for="confirm-pwd">Re-enter Password:</label>
          <input id="confirm-pwd" className="form-control" placeholder="Re-enter password" type="password" />
          <br />
          <button className="btn btn-info btn-md">Submit</button>
          <br />
          <span>alredy have an account? </span>
          <Link to="/">Login here.</Link>
        </form>
        <Footer />
      </div>
    )
  }
}

export default SignupForm;
