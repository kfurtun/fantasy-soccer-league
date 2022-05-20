const connectDb = require("../../connectDb");

const getResults = async (req, res) => {
  const { db, client } = await connectDb();
  const submissionResult = await db
    .collection("line-ups")
    .find({ week: parseInt(req.query.week) })
    .toArray();

  if (submissionResult) {
    res
      .status(200)
      .json({ status: 200, message: "Success", data: submissionResult });
  } else {
    res.status(400).json({ status: 400, message: "Something wrong" });
  }

  client.close();
};

module.exports = getResults;
