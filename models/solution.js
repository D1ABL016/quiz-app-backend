const mongoose = require("mongoose");

const solutionSchema = new mongoose.Schema({
    questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: [true, 'Please provide a question']
    },
    writtenSolution: {
        type: String,
        required: [true, 'Please provide an answer']
    },
    VideoSolution: {
        type: [String],
        required: [false, 'Please provide options']
        
    }
});

const Solution = mongoose.model('Solution', solutionSchema);
module.exports = Solution;
