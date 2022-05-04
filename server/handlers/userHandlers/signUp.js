const connectDb = require("../../connectDb");
const bcrypt = require("bcrypt");
const saltRounds = 10;

//for sign up
const signUp = async (body, req, res) => {
  const { db, client } = await connectDb();

  bcrypt.hash(body.password, saltRounds, async (err, hash) => {
    const checkUserExist = await db
      .collection("users")
      .findOne({ _id: body.email });
    if (!checkUserExist) {
      const newUser = await db
        .collection("users")
        .insertOne({ ...body, password: hash, _id: body.email });
      if (newUser) {
        const userInfo = await db
          .collection("users")
          .findOne({ _id: body.email });
        res.status(200).json({
          status: 200,
          message: "Successfully signed in!",
          data: {
            firstName: userInfo.firstName,
            email: userInfo.email,
            team: userInfo.team,
          },
        });
      }
    } else {
      res.status(400).json({
        status: 400,
        message: "This user already exists",
      });
    }
  });
  client.close();
};

module.exports = signUp;
