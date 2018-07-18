import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from './Footer';
import HeaderContainer from '../containers/HeaderContainer';
import '../App.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
  }

  componentWillMount() {
  }
  notify(msg) {
    toast(msg);
  }

  render() {
    if (this.props.user === null) {
      this.props.history.push("/");
      return (
        <h5>You must login first.</h5>
      )
    } else {
      return (
        <div>
        <HeaderContainer />
        <h2>Welcome {this.props.user.name}!</h2>
        <p>{this.props.user.email}</p>
        <Footer />
        </div>
      )
    }
  }
}

export default LoginForm;
