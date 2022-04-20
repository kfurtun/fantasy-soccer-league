const connectDb = require("../../connectDb");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//for sign up
const signUp = async (body, req, res) => {
  const { db } = await connectDb();

  bcrypt.hash(body.password, saltRounds, async (err, hash) => {
    const newUser = await db
      .collection("users")
      .insertOne({ ...body, password: hash });
    if (newUser) {
      res
        .status(200)
        .json({
          status: 200,
          message: "Successfully signed in!",
          data: newUser,
        });
    } else {
      res.status(400).json({
        status: 400,
        message: "This user already exists",
      });
    }
  });
};

module.exports = signUp;
