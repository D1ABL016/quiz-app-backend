const mongoose = require('mongoose');
const subjectSchema = require('./subject');

// Course Schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  validity: {
    type: Number, 
    required: true
  },
  subjects: {
    type: [subjectSchema], 
    required: true
  }
});

// Model
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
