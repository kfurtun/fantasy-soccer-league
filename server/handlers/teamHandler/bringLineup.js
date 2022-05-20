const connectDb = require("../../connectDb");

const bringLineup = async (req, res) => {
  const { db, client } = await connectDb();
  const submissionResult = await db
    .collection("line-ups")
    .findOne({ email: req.query.email, week: parseInt(req.query.week) });

  if (!submissionResult) {
    res.status(400).json({ status: 400, message: "Not submitted yet" });
  } else {
    submissionResult;
    res
      .status(200)
      .json({ status: 200, message: "Updated", data: submissionResult });
  }
  client.close();
};

module.exports = bringLineup;
