const express = require('express');
const users = require('../routes/users');
const auth = require('../routes/auth');
const goals = require('../routes/goals');

module.exports = function(app) {
    app.use(express.json());
    app.use('/api/auth', auth);
    app.use('/api/users', users);
    app.use('/api/goals', goals);
}