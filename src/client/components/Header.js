import React from 'react';
import '../App.css';

class Header extends React.Component {
  handleLogout() {
    if (this.props.user) {
      this.props.logout();
    } else {
      alert("You are alredy logged out!");
    }
  }
  render() {
    return (
      <div className="header">
        <h3>Task Management system</h3>
        <span>
        {
          this.props.user &&
          <button className="pull-right btn btn-sm btn-warning" onClick={() => { this.handleLogout(); }}>Logout</button>
        }
        </span>
      </div>
    )
  }
}

export default Header;
