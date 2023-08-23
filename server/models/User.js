const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    favoriteMissions: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Mission',
        default: []
    }
});

module.exports = mongoose.model('User', UserSchema);
