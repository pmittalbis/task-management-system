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

server.listen(PORT, () => {
  console.log(`Server is running on  Port ${PORT}...`);
})
