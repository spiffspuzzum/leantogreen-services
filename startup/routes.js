const express = require('express');
const users = require('../routes/users');
const auth = require('../routes/auth');
const goals = require('../routes/goals');
const profiles = require('../routes/profiles');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/auth', auth);
    app.use('/api/users', users);
    app.use('/api/goals', goals);
    app.use('/api/profiles', profiles);
}