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
              <li className="dropdown">
                <Link to="#" className="dropdown-toggle" data-toggle="dropdown" href="#">
                <span className="material-icons" title="Notifications">&#xe7f4;</span></Link>
                <ul className="dropdown-menu">
                {
                  (this.props.user.notifications.length > 0) ?
                  this.props.user.notifications.map((item) => {
                    return (
                      <li className="notification" key={item._id}><span>{item.message}</span><hr /></li>
                    )
                  }) :
                    <li className="notification"><span>Its empty here.</span><hr /></li>
                }
                </ul>
              </li>
              <li><a href="/" to="/" onClick={() => { this.handleLogout(); }}>Logout</a></li>
            </ul>
          }
        </div>
      </nav>
    )
  }
}

export default Header;
