import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import '../App.css';

class LoginForm extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <form>
          <label for="email">Email:</label>
          <input id="email" className="form-control" placeholder="Enter email" type="email" />
          <label for="password">Password:</label>
          <input id="password" className="form-control" placeholder="Enter password" type="password" />
          <br/>
          <button className="btn btn-info btn-md">Submit</button>
          <br/>
          <span>Don&#39;t have an account? </span>
          <Link to="/Signup">Signup here.</Link>
        </form>
        <Footer />
      </div>
    )
  }
}

export default LoginForm;
