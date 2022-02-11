const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Track = mongoose.model('Track');

const router = express.Router();
const axios = require('axios')


router.get('/tracks', async (req, res) => {
  const tracks = await Track.find({ userId: req.user._id });

  res.send(tracks);
});


router.all('/geocoding', async (req, res) => {
  const { locationProvince, locationCity ,locationStreet} = req.body;
  console.log(locationProvince,locationCity,locationStreet);

  axios.post('https://api.map.baidu.com', {
    todo: 'Buy the milk'
  })
  res.send("tracks");
});



router.post('/tracks', async (req, res) => {
  const { name, locations } = req.body;

  if (!name || !locations) {
    return res
      .status(422)
      .send({ error: 'You must provide a name and locations' });
  }

  try {
    const track = new Track({ name, locations, userId: req.user._id });
    await track.save();
    res.send(track);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
