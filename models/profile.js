const mongoose = require('mongoose');
const Joi = require('joi');

const goalSchema = new mongoose.Schema({
    summary: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    endDate: {
        type: Date
    },
    dailyPoints: {
        type: Number,
        default: 1
    }
});

const profileSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    vegOrVegan: {
        type: Boolean,
        default: false
    },
    ownHome: {
        type: Boolean,
        default: false
    },
    greenCommuter: {
        type: Boolean,
        default: false
    },
    currentGoals: {
        type: [goalSchema]
    },
    completedGoals: {
        type: [goalSchema]
    }
});


const Profile = mongoose.model('Profile', profileSchema);

function validateProfile(profile) {
    const schema = {
        userId: Joi.string().required(),
        vegOrVegan: Joi.boolean().required(),
        ownHome: Joi.boolean().required(),
        greenCommuter: Joi.boolean().required(),
        currentGoals: Joi.array().required(),
        completedGoals: Joi.array().required()
    };

    return Joi.validate(profile, schema);
}

exports.Profile = Profile;
exports.validate = validateProfile;