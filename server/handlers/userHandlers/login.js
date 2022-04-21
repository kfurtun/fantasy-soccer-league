const connectDb = require("../../connectDb");
const bcrypt = require("bcrypt");

//for login auth
const login = async (password, email, req, res) => {
  const { db } = await connectDb();
  const userResult = await db.collection("users").findOne({ email });
  if (userResult) {
    bcrypt.compare(password, userResult.password, async (err, result) => {
      if (result) {
        res.status(200).json({
          status: 200,
          message: "Successfully signed in!",
          data: userResult,
        });
      } else {
        res.status(400).json({
          status: 400,
          message: "Password is not correct. Please try again!",
        });
      }
    });
  } else {
    res
      .status(404)
      .json({ status: 404, message: "User not found. Please try again!" });
  }
};

module.exports = login;
