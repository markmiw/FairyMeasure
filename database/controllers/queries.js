const Users = require('../models/UsersSchema.js');

const addUser = (obj) => {
  return Users.create(obj);
};
module.exports = addUser;

const addMeasurements = (obj) => {
  return Users.create(obj);
};
module.exports = addMeasurements;

const removeMeasurements = (obj) => {
  return Users.create(obj);
};
module.exports = removeMeasurements;
