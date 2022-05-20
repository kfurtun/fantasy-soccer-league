const connectDb = require("../../connectDb");

const submitTeam = async (data, req, res) => {
  const { db, client } = await connectDb();
  const submissionResult = await db
    .collection("line-ups")
    .findOne({ email: data.email, week: data.week });
  if (!submissionResult) {
    const result = await db.collection("line-ups").insertOne({ ...data });
    result
      ? res.status(200).json({ status: 200, message: "Success" })
      : res.status(400).json({ status: 400, message: "Something wrong" });
  } else {
    await db
      .collection("line-ups")
      .deleteOne({ email: data.email }, { week: data.week });
    const result = await db.collection("line-ups").insertOne({ ...data });
    result
      ? res.status(200).json({ status: 200, message: "Updated" })
      : res.status(400).json({ status: 400, message: "Something wrong" });
  }
  client.close();
};

module.exports = submitTeam;
