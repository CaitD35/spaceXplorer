const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,  
  favoriteMissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mission' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
