const auth = require('../middleware/auth');
const { Profile, validate } = require('../models/profile');
const express = require('express');
const router = express.Router();

router.get('/', auth, async(req,res) => {
    let profile = await Profile.find({}).where('userId', req.user._id);
    if(profile.length === 0) {
        profile = new Profile({ 
            userId: req.user._id,
            vegOrVegan: false,
            ownHome: false,
            greenCommuter: false,
            currentGoals: [],
            completedGoals: []
        });
        await profile.save();
    }
    res.send(profile);
});

//PUT
router.put("/:id", auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);


  const profile = await Profile.findByIdAndUpdate(
    req.params.id,
    {
      userId: req.body.userId,
      vegOrVegan: req.body.vegOrVegan,
      ownHome: req.body.ownHome,
      greenCommuter: req.body.greenCommuter,
      currentGoals: req.body.currentGoals,
      completedGoals: req.body.completedGoals
    },
     { new: true }
  );

  if (!profile)
    return res.status(404).send("The profile with the given ID was not found.");

  res.send(profile);
});

module.exports = router;