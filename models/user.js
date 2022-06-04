// 1. 创建一个userschema Validation user (router/register/login)
// 2. hash password
// 3. save user
// 4. generate token
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs/dist/bcrypt");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: [true, "Please Enter a User Name"],
    minlength: [4, "User Name is too short"],
    maxlength: [15, "User Name is too long"],
  },
  Email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  Password: {
    type: String,
    require: [true, "Please provide password"],
    minlength: [4, "Password is too short"],
  },
});

UserSchema.pre("save", async function () {
  const salt = bcrypt.genSaltSync(10);
  this.Password = await bcrypt.hashSync(this.Password, salt);
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

UserSchema.methods.comparePassword = async function (userTypePassword) {
  const isMatch = await bcrypt.compare(userTypePassword, this.Password);
  return isMatch;
};

module.exports = mongoose.model("UserSchema", UserSchema);
