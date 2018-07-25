import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AssignTaskContainer from '../containers/AssignTaskContainer';
import Footer from './Footer';
import HeaderContainer from '../containers/HeaderContainer';
import TasksPanelContainer from '../containers/TasksPanelContainer';
import '../App.css';

class TaskManagement extends React.Component {
  async componentWillMount() {
    await this.props.getAuthUser();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps !== this.props) {
      if (!nextProps.user) {
        this.props.history.push("/");
      }
    }
  }

  notify(msg) {
    toast(msg);
  }

  render() {
    if (!this.props.user) {
      return (
        <div>
          <h5>You must login first.</h5>
          <br />
          <h2><Link to="/">Go to Login page</Link></h2>
        </div>
      )
    } else {
      return (
        <div>
          <HeaderContainer />
          <div className="row">
            <AssignTaskContainer />
            <TasksPanelContainer />
          </div>
          <Footer />
        </div>
      )
    }
  }
}

export default TaskManagement;
