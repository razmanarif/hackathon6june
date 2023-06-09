const bcrypt = require("bcrypt");
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    houseNumber: {type: Number},
    street: {type: String},
    city : {type: String},
    district: {type: String}
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profilePicture: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  // lists: [
  //   {
  //     items: [
  //       {
  //         item: String,
  //         quantity: Number,
  //       },
  //     ],
  //     deliveryDate: Date,
  //     status: String, //"free", "inProgress", "fulfilled"
  //   }
  // ],
  userType: {
    type: String,
    enum: ['senior', 'helper']
  }
});

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  user.password = bcrypt.hashSync(user.password, 10);
  next();
});

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
