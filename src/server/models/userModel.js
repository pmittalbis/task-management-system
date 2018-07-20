import mongoose from 'mongoose';
import { taskDetail, taskSchema } from './taskModel';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  profilePic: String,
  assignedTasks: [taskSchema],
  toDoTasks: [taskSchema],
});

module.exports = mongoose.model('Users', userSchema);
