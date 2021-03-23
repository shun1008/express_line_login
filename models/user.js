const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  psnId: {
    type: String,
    required: true
  },
  deviceId: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
