import axios from 'axios';
import React from 'react';
import '../App.css';

class TasksPanel extends React.Component {
  componentWillMount() {
    axios.get(`http://localhost:4000/GetTasks/${this.props.user._id}`)
    .then((response) => {
      console.log(response.data);
      this.props.saveTasks(response.data);
    })
    .catch((err) => { console.log(err) });
  }

  render() {
    return (
      <div className="col-md-9 text-center">
        <div className="col-md-4 panel">
          <h4>Done</h4>
          <hr />
          {
            this.props.tasks.map((task) => {
              return (
                (task.status === "Done") &&
                <div>
                  Status: {task.status}
                  Description: {task.description}
                </div>
              )
            })
          }
        </div>
        <div className="col-md-4 panel">
          <h4>Pending</h4>
          <hr />
          {
            this.props.tasks.map((task) => {
              return (
                (task.status === "Pending") &&
                <div>
                  Status: {task.status}
                  Description: {task.description}
                </div>
              )
            })
          }
        </div>
        <div className="col-md-4 panel">
          <h4>In process</h4>
          <hr />
          {
            this.props.tasks.map((task) => {
              return (
                (task.status === "In Process") &&
                <div>
                  Status: {task.status}
                  Description: {task.description}
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default TasksPanel;
