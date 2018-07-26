import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  message: String,
  seen: Boolean,
  createdAt: Date,
});

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  profilePic: String,
  notifications: [notificationSchema],
});

module.exports = mongoose.model('Users', userSchema);
