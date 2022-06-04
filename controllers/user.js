const UserSchema = require("../models/user");
const tryCatchWrapper = require("../middleware/tryCatchWrapper");

const register = tryCatchWrapper(async (req, res, next) => {
  const user = await UserSchema.create(req.body);
  const token = user.createJWT();
  res.status(201).json({ user: { name: user.UserName }, token });
});

const login = tryCatchWrapper(async (req, res) => {
  const { Email, Password } = req.body;
  console.log(Email);
  console.log(Password);
  if (!Email || !Password) {
    throw new Error("No email or No Password");
  }

  const user = await UserSchema.findOne({ Email });

  if (!user) {
    throw new Error("Never sign up before");
  }

  const isMatch = await user.comparePassword(Password);
  console.log(isMatch);
  if (isMatch === false) {
    throw new Error("Wrong Password");
  }

  const token = user.createJWT();

  res.status(200).json({ user: { name: user.UserName }, token });
});

module.exports = { login, register };
