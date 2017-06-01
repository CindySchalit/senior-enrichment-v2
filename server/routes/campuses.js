'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models/index.js');
const Campus = models.Campus;

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
  Campus.findById(req.params.id)
  .then(campus => {
    res.send(campus);
  })
  .catch(next);
})

module.exports = router;
