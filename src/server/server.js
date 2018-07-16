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
server.use(cors('*'));

server.post('/Signup', (req, res) => {
  console.log("In Signup");
  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.password);
});

server.listen(PORT, () => {
  console.log(`Server is running on  Port ${PORT}...`);
})
