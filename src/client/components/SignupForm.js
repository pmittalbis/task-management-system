import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from './Footer';
import Header from './Header';
import '../App.css';

class SignupForm extends React.Component {
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
  
  notify = (msg) => {
    toast(msg, { autoClose: 5000 });
  }

  async handleSubmitClick(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const password = this.refs.password.value;
    const confirmPwd = this.refs.confirmPwd.value;
    const userDetails = {
      name: name,
      email: email,
      password: password,
    };
    if (name && email && password && confirmPwd) {
      if (this.state.message === 'Password match') {
        await this.props.signup(userDetails, this);
        if (this.props.user) {
          this.history.push("/");
        }
      } else {
        e.preventDefault();
        alert(this.state.message);
      }
    } else {
      this.setState({
        message: "Please fill all required fields!"
      });
    }
  }

  handleOnPasswordChange() {
    if (this.refs.password.value === this.refs.confirmPwd.value) {
      this.setState({
        message: 'Password match'
      })
    } else {
      this.setState({
        message: 'Password do not match!',
      })
    }
  }
  render() {
    return (
      <div>
        <Header />
        <form>
          <label htmlFor="name">Full name*:</label>
          <input id="name" ref="name" className="form-control" required placeholder="Enter Full name" type="text"/>
          <label htmlFor="email">Email*:</label>
          <input id="email" ref="email" className="form-control" required placeholder="Enter email" type="email" />
          <label htmlFor="password">Password*:</label>
          <input id="password" ref="password" className="form-control" required placeholder="Enter password" type="password" />
          <label htmlFor="confirm-pwd">Re-enter Password*:</label>
          <input id="confirm-pwd" required onChange={() => this.handleOnPasswordChange()} ref="confirmPwd" className="form-control" placeholder="Re-enter password" type="password" />
          <p>{this.state.message}</p>
          <br />
          <button className="btn btn-info btn-md" onClick={(e) => this.handleSubmitClick(e)}>Submit</button>
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
