import React from 'react';
import '../App.css';

var isDropSuccessful = false;
var updatedStatus = null;

class TasksPanel extends React.Component {
  async componentWillMount() {
    await this.props.getTasks(this.props.user._id);
  }

  handleDragStart(e) {
    isDropSuccessful = false;
  }

  handleOnDragOver(e) {
    e.preventDefault();
  }

  handleDragEnd(e) {
    if (isDropSuccessful && updatedStatus) {
      this.props.updateTask(e.target.id, this.props.user._id, updatedStatus);
      isDropSuccessful = false;
      const task = this.props.tasks.find((t) => {
        return t._id === e.target.id
      })
      const notification = {
        message: this.props.user.name + " changed task status from " + task.status + " to " + updatedStatus,
        seen: false,
        createdAt: Date.now(),
      }
      updatedStatus = null;
      this.props.notifyUser(notification, task.assignedBy);
    }
  }

  handleOnDrop(e) {
    e.preventDefault();
    if (e.target.id === "pending" || e.target.id === "in-process" || e.target.id === "done") {
      updatedStatus = e.target.title;
      isDropSuccessful = true;
    }
  }

  render() {
    return (
      <div className="col-md-9 text-center" >
        <div className="col-md-4 panel" id="pending" title="Pending" onDrop={(e) => this.handleOnDrop(e)} onDragOver={(e) => this.handleOnDragOver(e)}>
        <h4><strong>Pending</strong></h4>
        <hr />
        {
          this.props.tasks.map((task) => {
            return (
              (task.status === "Pending") &&
              <div key={task._id} id={task._id} title={task.status} draggable="true" onDragStart={(e) => this.handleDragStart(e)} onDragEnd={(e) => { this.handleDragEnd(e) }} >
                <strong>Status:</strong> {task.status}
                <br />
                <strong>Description:</strong> {task.description}
                <br />
                <hr />
              </div>
            )
          })
        }
        </div>
        <div className="col-md-4 panel" id="in-process" title="In Process" onDrop={(e) => this.handleOnDrop(e)} onDragOver={(e) => this.handleOnDragOver(e)}>
        <h4 ><strong>In process</strong></h4>
        <hr />
        {
          this.props.tasks.map((task) => {
            return (
              (task.status === "In Process") &&
              <div key={task._id} id={task._id} title={task.status} draggable="true" onDragStart={(e) => this.handleDragStart(e)} onDragEnd={(e) => { this.handleDragEnd(e) }}>
                <strong>Status:</strong> {task.status}
                <br />
                <strong>Description:</strong> {task.description}
                <br />
                <hr />
              </div>
            )
          })
        }
        </div>
        <div className="col-md-4 panel" id="done" title="Done" onDrop={(e) => this.handleOnDrop(e)} onDragOver={(e) => this.handleOnDragOver(e)}>
          <h4><strong>Done</strong></h4>
          <hr />
          {
            this.props.tasks.map((task) => {
              return (
                (task.status === "Done") &&
                <div key={task._id} id={task._id} title={task.status} draggable="true" onDragStart={(e) => this.handleDragStart(e)} onDragEnd={(e) => { this.handleDragEnd(e) }}>
                  <strong>Status:</strong> {task.status}
                  <br />
                  <strong>Description:</strong> {task.description}
                  <br />
                  <hr />
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
