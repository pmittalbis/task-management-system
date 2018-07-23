import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import User from './models/userModel';
import Task from './models/taskModel';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload/')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + file.originalname)
  }
})

const upload = multer({ storage: storage });
mongoose.connect('mongodb://localhost:27017/task-management');
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB...')
});
const PORT = 4000;
const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use('/upload', express.static('upload'));
server.use(cors());

server.post('/Signup', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    profilePic: null,
  });
  const existingUser = User.findOne({ email: req.body.email }, (err, user) => {
    if (err) { res.send(err); }
    if (user) {
      res.send("User with this email alredy exists.");
    } else {
      newUser.save((err, response) => {
        if (err) { console.log("Unable to Signup at the moment!"); }
        res.send(response);
      });
    }
    return console.log(user);
  });
});

server.post('/Login', (req, res) => {
  const AuthUser = User.findOne({ email: req.body.email, password: req.body.password }, (err, record) => {
    if (err) { res.send("Login Failed!") }
    if (record) {
      res.send(record);
    } else {
      res.send("Username or password does not match!");
    }
  })
});

server.get('/GetUsers', (req, res) => {
  const users = User.find({}, (err, records) => {
    if (err) { res.send("Login Failed!") }
    if (records) {
      res.send(records);
    } else {
      res.send("Unable to fetch users!");
    }
  });
});

server.get('/GetUser/:id', (req, res) => {
  const users = User.findOne({_id: req.params.id}, (err, record) => {
    if (err) { res.send("Error in fetching user!") }
    if (record) {
      res.send(record);
    } else {
      res.send("User not found!");
    }
  });
});

server.put('/UploadProfile/:id', upload.single('image'), (req, res) => {
  console.log(req.file);
  console.log(req.params.id);
  User.findOneAndUpdate({_id: req.params.id}, {$set: {profilePic: req.file.path}}, {new: true}, (err, record) => {
    if (err) { res.send(err) }
    else {
      console.log(record);
      res.send(record);
    }
  })
});

server.post('/AssignTask', (req, res) => {
  console.log(req.body.assignedTask);
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

server.get('/GetTasks/:userId', (req, res) => {
  console.log(req.body);
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

server.listen(PORT, () => {
  console.log(`Server is running on  Port ${PORT}...`);
})
