const mongoose = require('mongoose');

const subChapterSchema = new mongoose.Schema({
    subChapterId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    subTopics: {
      type: [String], // Array of strings
      required: true
    }
  });
  
  // Year Schema
  const yearSchema = new mongoose.Schema({
    year: {
      type: Number,
      required: true
    },
    subChapters: {
      type: [subChapterSchema], // Array of subChapterSchema
      required: true
    }
  });
  
  // Subject Schema
  const subjectSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    years: {
      type: [yearSchema], // Array of yearSchema
      required: true
    }
  });

  module.exports = subjectSchema;