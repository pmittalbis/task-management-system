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

  async componentWillMount() {
    await this.props.getAuthUser();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps !== this.props) {
      if (nextProps.user) {
        this.props.history.push("/Dashboard");
      }
    }
  }

  handleLoginClick(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    let thisContext = this;
    if (email && password) {
      this.props.login(email, password, thisContext);
    } else {
      this.setState({
        message: "Please fill all required fields!"
      });
    }
  }

  notify(msg) {
    toast(msg);
  }

  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="email">Email*:</label>
          <input id="email" ref="email" required className="form-control" placeholder="Enter email" type="email" />
          <label htmlFor="password">Password*:</label>
          <input id="password" ref="password" required className="form-control" placeholder="Enter password" type="password" />
          <p>{this.state.message}</p>
          <br/>
          <button className="btn btn-info btn-md" onClick={(e) => { this.handleLoginClick(e); }}>Submit</button>
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
