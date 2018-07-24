import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Header extends React.Component {
  handleLogout() {
    if (this.props.user) {
      window.location.reload();
      this.props.logout();
    } else {
      alert("You are alredy logged out!");
    }
  }
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Task Management System</a>
          </div>
          {
            this.props.user &&
            <ul className="nav navbar-nav">
              <li className="active"><Link to="/Dashboard">Home</Link></li>
              <li><Link to="/Profile">Profile</Link></li>
              <li><Link to="/TaskManagement">Tasks</Link></li>
              <li className="pull-right"><button className="btn btn-sm btn-warning" onClick={() => { this.handleLogout(); }}>Logout</button></li>
            </ul>
          }
        </div>
      </nav>
    )
  }
}

export default Header;
