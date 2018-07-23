import axios from 'axios';
import React from 'react';
import '../App.css';

class AssignTask extends React.Component {
  componentWillMount() {
    axios.get('http://localhost:4000/GetUsers')
    .then((response) => {
      this.props.setUsers(response.data);
    })
    .catch((err) => { console.log(err) });
  }

  async handleAssignTask(e) {
    e.preventDefault();
    const assignedTask = {
      assignedBy: this.props.user._id,
      assignedTo: this.refs.name.value,
      description: this.refs.description.value,
      status: this.refs.status.value,
    }
    axios.post('http://localhost:4000/AssignTask', {assignedTask})
     .then((res) => {
       // this.props.setCurrentUser(res.data)
       console.log("Updated user ", res.data)
     })
     .catch((err) => { console.log(err) });
  }

  render() {
    return (
      <div className="col-md-3 pull-left">
        <h4>Assign a task</h4>
        <form>
          <select className="form-control" required ref="name">
          {
            this.props.users.map((user) => {
              return (
                (user._id !== this.props.user._id) && <option key={user._id} value={user._id}>{user.name}</option>
              )
            })
          }
          </select>
          <br />
          <select className="form-control" required ref="status">
            <option value="Done">Done</option>
            <option value="In Process">In Process</option>
            <option value="Pending">Pending</option>
          </select>
          <br />
          <textarea rows="4" cols="50" required className="form-control" ref="description">
          </textarea>
          <br />
          <button className="btn btn-md btn-info text-center" onClick={(e) => { this.handleAssignTask(e); }}>Assign</button>
        </form>
        <br />
      </div>
    )
  }
}

export default AssignTask;
