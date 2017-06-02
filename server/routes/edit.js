'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models/index.js');
const Campus = models.Campus;
const User = models.User;

// PUT api/edit/campuses/:id
router.put('/campuses/:id', (req, res, next) => {
  console.log('~~~~~~~', req.body)
  Campus.findById(req.params.id)
  .then(campus => {
    if (campus) {
      campus.update(req.body);
      return campus.save();
    }
    else {
      res.send(404);
    }
  })
  .then(campus => {
    res.send(campus);
  })
  .catch(next);
});

module.exports = router;
