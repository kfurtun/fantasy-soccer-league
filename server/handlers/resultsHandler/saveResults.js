const connectDb = require("../../connectDb");

const saveResults = async (req, res) => {
  const { db, client } = await connectDb();
  for (const [key, value] of Object.entries(req.body)) {
    await db
      .collection("line-ups")
      .updateOne(
        { email: key, week: parseInt(req.query.week) },
        { $set: { point: parseInt(value) } }
      );
  }

  res.status(200).json({ message: "Users' points are updated" });
  client.close();
};

module.exports = saveResults;
