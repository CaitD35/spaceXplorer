const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  name: String,
  rocketType: String,
  payload: String,
  launchDate: Date,
  launchLocation: String,
  landingLocation: String,
  status: String,
  videos: [String],
  images: [String]
});

const Mission = mongoose.model('Mission', missionSchema);

module.exports = Mission;
