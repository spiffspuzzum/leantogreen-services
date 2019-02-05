const { Goal } = require('../models/goal');
const express = require('express');
const router = express.Router();

router.get('/', async (req,res) => {
    //get jwt from header
    //decode it
    //get userId
    //get current goals
    //only return a goal that is not in current goals
    const totalGoals = await Goal.find({}).where('active', true);
    let goals = [];
    for( let i = 0; i < 3; i++){
        let max = totalGoals.length;
        let random = Math.floor(Math.random() * max );
        goals.push(totalGoals[random]);
        totalGoals.splice(random, 1);
    }

    res.send(goals);
});

module.exports = router;
