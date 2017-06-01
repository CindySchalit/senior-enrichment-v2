'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models/index.js');
const Campus = models.Campus;
const User = models.User;

// PUT api/edit/campus
router.put('/campus', (req, res, next) => {

});

module.exports = router;
