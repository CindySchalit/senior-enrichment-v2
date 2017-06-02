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

// DELETE api/campuses/:id
router.delete('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
  .then(campus => {
    if (campus) {
      return campus.destroy();
    }
    else {
      res.status(404).end();
    }
  })
  .then(campus => {
    res.status(204).end();
  })
  .catch(next);
});

module.exports = router;
