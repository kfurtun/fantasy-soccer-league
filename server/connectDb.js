const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
// var ObjectId = require("mongodb").ObjectId;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//connects to the DB and return db and client
const connectDb = async () => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("project");

  return { db, client };
};

module.exports = connectDb;
