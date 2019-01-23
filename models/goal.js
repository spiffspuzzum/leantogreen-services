const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    summary: {
        type: String,
        minLength: 3,
        maxLength: 255,
        required: true,
        trim: true
    },
    description: {
        type: String,
        minLength: 3,
        maxLength: 1024,
        required: true,
        trim: true
    },
    length: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        minLength: 5,
        maxLength: 255,
        required: false
    },
    tags: {
        type: Array,
        required: false
    }
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports.Goal = Goal;