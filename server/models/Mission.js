const mongoose = require('mongoose');

const MissionSchema = new mongoose.Schema({
    rocketType: {
        type: String,
        required: true
    },
    missionPayload: {
        type: String,
        required: true
    },
    launchDate: {
        type: Date,
        required: true
    },
    launchLocation: {
        type: String,
        required: true
    },
    landingLocation: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Success', 'Failure'],
        required: true
    },
    media: {
        videos: [String],
        images: [String]
    },
    missionBrief: {
        type: String,
        default: ""
    },
    missionObjective: {
        type: String,
        default: ""
    },
    crewDetails: {
        type: [String],
        default: []
    }
});

module.exports = mongoose.model('Mission', MissionSchema);
