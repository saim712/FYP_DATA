const mongoose = require('mongoose');

const UniversitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String, // URL of the university image
    default: "https://via.placeholder.com/150", // Default placeholder image URL
  },
  coursesOffered: [
    {
      courseName: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
    },
  ],
  admissionCriteria: {
    requiredPercentage: {
      type: Number,
      min: 0,
      max: 100,
    },
    entranceExam: {
      type: Boolean,
      default: false,
    },
    details: {
      type: String,
    },
  },
  facilities: {
    type: [String], // Examples: ['Hostel', 'Library', 'Sports Complex']
    default: [],
  },
  addedOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('University', UniversitySchema);
