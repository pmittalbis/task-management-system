import mongoose from 'mongoose';
import userSchema from './userModel';
const Schema = mongoose.Schema;


export const taskDetailSchema = new Schema({
  assingedTo: userSchema,
  status: String,
  description: String,
});

export const taskSchema = new Schema({
  assingedBy: userSchema,
  taskDetail: [taskDetailSchema],
});
