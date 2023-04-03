const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  shortName: String,
  url: String,
});

module.exports = mongoose.model('User', UserSchema, 'users');
