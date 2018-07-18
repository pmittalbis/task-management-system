import React from 'react';
import '../App.css';

class Header extends React.Component {
  handleLogout() {
    this.props.logout();
  }
  render() {
    return (
      <div className="header">
        <h3>Task Management system</h3>
        <span>
          <button className="pull-right btn btn-sm btn-warning" onClick={() => { this.handleLogout(); }}>Logout</button>
        </span>
      </div>
    )
  }
}

export default Header;
