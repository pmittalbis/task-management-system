import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import User from './models/userModel';

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

server.put('/AssignTask/:id', (req, res) => {
  var tempArr = [];
  tempArr.push(req.body.assignedTask);
  User.findOneAndUpdate({_id: req.params.id},
    {$set: {
      assignedTasks: tempArr
    }}, {new: true}, (err, record) => {
    if (err) { res.send(err) }
    else {
      res.send(record);
    }
  });
  console.log("assignedTo id ", req.body.assignedTask.taskDetail.assignedTo._id);
  User.findOneAndUpdate({_id: req.body.assignedTask.taskDetail.assignedTo._id},
    {$set: {
      toDoTasks: tempArr
    }}, {new: true}, (err, record) => {
    if (err) { res.send(err) }
    else {
      console.log("assignedTo record ", record);
      // res.send(record);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on  Port ${PORT}...`);
})
