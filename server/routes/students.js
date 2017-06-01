'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models/index.js');
const Student = models.User;
const Campus = models.Campus;

// GET /api/students/
router.get('/', (req, res, next) => {
  Student.findAll({})
  .then(students => {
    res.send(students);
  })
  .catch(next);
});

// GET /api/students/:id
router.get('/:id', (req, res, next) => {
  Student.findOne({
    where: { id: req.params.id },
    include: [ Campus ], // eager loading
  })
  .then(student => {
    res.send(student);
  })
  .catch(next);
});

module.exports = router;
