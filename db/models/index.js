'use strict';

// Require models
const User = require('./user');
const Campus = require('./campus');

// Form associations
User.belongsTo(Campus, { onDelete: 'cascade' }); // campusId added to user; if campus deleted, associated users automatically deleted
Campus.hasMany(User); // getUsers, setUsers methods available

module.exports = { User, Campus };
