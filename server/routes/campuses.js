'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models/index.js');
const Campus = models.Campus;
const User = models.User;

// GET api/campuses/
router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => {
    res.send(campuses);
  })
  .catch(next);
});

// GET api/campuses/:id
router.get('/:id', (req, res, next) => {
  Campus.findOne({
    where: { id: req.params.id },
    include: [ User ] // eager loading
  })
  .then(campus => {
    res.send(campus);
  })
  .catch(next);
});

module.exports = router;
