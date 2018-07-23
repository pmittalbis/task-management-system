import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  profilePic: String,
});

module.exports = mongoose.model('Users', userSchema);
