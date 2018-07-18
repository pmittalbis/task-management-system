import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('Users', userSchema);