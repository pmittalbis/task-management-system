import bodyParser from 'body-parser';
import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import Task from '../models/taskModel';

const router = express.Router();

router.post('/AssignTask', (req, res) => {
  var newTask = new Task(req.body.assignedTask);
  newTask.save((err, task) => {
    if (err) {
      res.send("Error in creating a task!");
    } else {
      if (task) {
        console.log(task);
        res.send(task);
      } else {
        console.log("Can not assign task at the moment!");
        res.send("Can not assign task at the moment!");
      }
    }
  })
});

router.get('/GetTasks/:userId', (req, res) => {
  Task.find({assignedTo: req.params.userId}, (err, tasks) => {
    if (err) {
      res.send("Error in fetching tasks!");
    } else {
      if (tasks) {
        res.send(tasks);
      } else {
        res.send("No task found");
      }
    }
  });
});

export default router;
