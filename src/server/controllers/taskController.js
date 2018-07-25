import bodyParser from 'body-parser';
import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import Task from '../models/taskModel';

const router = express.Router();

router.post('/AssignTask', (req, res) => {
  var newTask = new Task(req.body);
  newTask.save((err, task) => {
    if (err) {
      res.send("Error in creating a task!");
    } else {
      if (task) {
        res.send(task);
      } else {
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

router.put('/UpdateTask/:taskId', (req, res) => {
  Task.findOneAndUpdate({_id: req.params.taskId}, {$set: {status: req.body.updatedStatus}}, {new: true}, (err, record) => {
    if (err) { res.send(err) }
    else {
      if (record) {
        res.send(record);
      } else {
        res.send("Unable to update task at the moment!");
      }
    }
  })
});

export default router;
