const {Users, Measurements} = require('../models/UsersSchema.js')
exports.addUser = ({ username, firstName, lastName, password, email, height }) => {
  return Users.create(
    {
      username: username,
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
      height: height
    }
  )
}
exports.getUser = async (username) => {
  return await Users.find({username}).lean()
}

exports.getAllUsers = async (username) => {
  return await Users.find({}).lean()
}

exports.checkEmail = async (email) => {
  return await Users.find({ email }).lean()
}

exports.loginUser = async (username, password) => {
  return await Users.find({ username: username, password:password }).lean()
}

exports.addMeasurements = (measurements) => {
  return Measurements.create(measurements)
}

exports.getMeasurements = async (username) => {
  return await Measurements.find({"username": username}).lean()
}

exports.getAllMeasurements = async () => {
  return await Measurements.find({}).lean()
}

// const checkEmail = async (email) => {
//   return await Users.find(email).exec();
// }
// module.exports = checkEmail;

// module.exports = addUser;

// const addMeasurements = (obj) => {
//   return Users.create(obj);
// };
// module.exports = addMeasurements;

// const removeMeasurements = (obj) => {
//   return Users.create(obj);
// };
// module.exports = removeMeasurements;
