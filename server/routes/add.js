'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models/index.js');
const Campus = models.Campus;
const User = models.User;

//POST /api/add/campus
router.post('/campus', (req, res, next) => {
  Campus.create(req.body)
  .then(newCampus => res.send(newCampus))
  .catch(next);
});

module.exports = router;
