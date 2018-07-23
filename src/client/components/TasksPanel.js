import React from 'react';
import '../App.css';

class TasksPanel extends React.Component {
  async componentWillMount() {
    await this.props.getTasks(this.props.user._id);
    debugger;
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
                <div key={task._id}>
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
                <div key={task._id}>
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
                <div key={task._id}>
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
