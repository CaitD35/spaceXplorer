const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  name: String,
  rocketType: String,
  missionPayload: String, 
  launchDate: Date,
  launchLocation: String,
  landingLocation: String,
  status: {
    type: String,
    enum: ['Success', 'Failure', 'Pending'], 
  },
  videos: [String],
  images: [String],
});

const Mission = mongoose.model('Mission', missionSchema);

module.exports = Mission;
