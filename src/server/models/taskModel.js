import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const taskSchema = new Schema({
  id: Schema.Types.ObjectId,
  assignedBy: String,
  assignedTo: String,
  description: String,
  status: String,
});

module.exports = mongoose.model('Tasks', taskSchema);
