const { endpoint, validate } = require('fastexpress');
const database = require('../models');

const { Tasks: Model } = database;

module.exports = endpoint(
  Model,
  {
    title: {
      validation: validate.string,
    },
    description: {
      validation: validate.string,
    },
    is_completed: {
      validation: validate.bool,
    }
  },
  database,
);
