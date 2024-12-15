const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/.+@.+\..+/, "Invalid email format"]
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    expertise: {
        type: [String], // Array of strings for multiple areas of expertise
        required: true
    },
    qualifications: {
        type: String, // Brief qualification or education
        required: true
    },
    availability: {
        type: Array, // Array of available time slots, e.g., ["Monday 2-4 PM"]
        default: []
    },
    ratings: {
        type: Number, // Average rating for the mentor
        default: 0
    },
    sessions: {
        type: Number, // Number of sessions conducted
        default: 0
    },
    profilePicture: {
        type: String, // URL to mentor's profile picture
        default: ""
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Mentor', mentorSchema);
