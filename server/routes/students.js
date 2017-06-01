'use strict';

const express = require('express');
const router = express.Router();
const models = require('../../db/models/index.js');
const Student = models.User;

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
  Student.findById(req.params.id)
  .then(student => {
    res.send(student);
  })
  .catch(next);
});

module.exports = router;
