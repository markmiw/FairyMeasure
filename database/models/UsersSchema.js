const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  height: Number
}
)

const Users = mongoose.model('Users', usersSchema)
module.exports.Users = Users

const measurementsSchema = new mongoose.Schema({
  username: String,
  date: String,
  face: {
    left_face: {
      width: Number,
      height: Number
    },
    right_face: {
      width: Number,
      height: Number
    },
    eyes: {
      width: Number
    },
    width: Number,
    height: Number
  },
  arms: {
    left_upper_arm_front: {
      width: Number,
      height: Number
    },
    left_upper_arm_back: {
      width: Number,
      height: Number
    },
    right_upper_arm_front: {
      width: Number,
      height: Number
    },
    right_upper_arm_back: {
      width: Number,
      height: Number
    },
    left_lower_arm_front: {
      width: Number,
      height: Number
    },
    left_lower_arm_back: {
      width: Number,
      height: Number
    },
    right_lower_arm_front: {
      width: Number,
      height: Number
    },
    right_lower_arm_back: {
      width: Number,
      height: Number
    },
    left_hand: {
      width: Number,
      height: Number
    },
    right_hand: {
      width: Number,
      height: Number
    }
  },
  torso: {
    torso_front: {
      width: Number,
      height: Number
    },
    torso_back: {
      width: Number,
      height: Number
    },
    shoulder: {
      width: Number,
      height: Number
    }
  },
  legs: {
    left_upper_leg_front: {
      width: Number,
      height: Number
    },
    left_upper_leg_back: {
      width: Number,
      height: Number
    },
    right_upper_leg_front: {
      width: Number,
      height: Number
    },
    right_upper_leg_back: {
      width: Number,
      height: Number
    },
    left_lower_leg_front: {
      width: Number,
      height: Number
    },
    left_lower_leg_back: {
      width: Number,
      height: Number
    },
    right_lower_leg_front: {
      width: Number,
      height: Number
    },
    right_lower_leg_back: {
      width: Number,
      height: Number
    },
    left_foot: {
      width: Number,
      height: Number
    },
    right_foot: {
      width: Number,
      height: Number
    }
  }
})
const Measurements = mongoose.model('Measurements', measurementsSchema)

module.exports.Measurements = Measurements
