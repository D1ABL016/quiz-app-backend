const mongoose  = require('mongoose');

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, 'Please provide a question']
    },
    options: {
        type: [String],
        required: [true, 'Please provide options']
    },
    correctOption: {
        type: String,
        required: [true, 'Please provide an answer']
    },
    marks: {
        type: Number,
        required: [true, 'Please provide marks']
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: [true, 'Please provide difficulty level']
    }
},
{timestamps: true});


const Question = mongoose.model('Question', questionSchema);
module.exports = Question;