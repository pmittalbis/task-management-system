import cors from 'cors';
import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import session from 'express-session';
import User from './models/userModel';
import Task from './models/taskModel';
import userController from './controllers/userController';
import taskController from './controllers/taskController';

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
server.use(session({ secret: "itcanbeanything", resave: false, saveUninitialized: true }));
server.use('/', userController);
server.use('/', taskController);

server.listen(PORT, () => {
  console.log(`Server is running on  Port ${PORT}...`);
})
