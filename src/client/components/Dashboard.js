import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from './Footer';
import Header from './Header';
import '../App.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
  }

  notify(msg) {
    toast(msg);
  }

  render() {
    debugger;
    return (
      <div>
        <Header />
          <h2>Welcome {this.props.user.name}!</h2>
          <p>{this.props.user.email}</p>
        <Footer />
      </div>
    )
  }
}

export default LoginForm;
