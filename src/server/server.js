import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import User from './models/userModel';

mongoose.connect('mongodb://localhost:27017/task-management');
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB...')
});
const PORT = 4000;
const server = express();
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(cors());

server.post('/Signup', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
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
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on  Port ${PORT}...`);
})
