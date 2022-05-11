const connectDb = require("../../connectDb");

const convertChar = require("../../assets/charConverter");

//for filtering players according to user input
const filterPlayers = async (letters, req, res) => {
  const convertedInput =
    convertChar(letters).charAt(0).toUpperCase() +
    convertChar(letters).slice(1).toLowerCase(); // converts english chars to turkish

  const input =
    letters.charAt(0).toUpperCase() + letters.slice(1).toLowerCase();

  const { db, client } = await connectDb();
  const result = await db
    .collection("players")
    .find({
      $or: [
        {
          firstname: new RegExp(input, "g"),
        },
        {
          firstname: new RegExp(convertedInput, "g"),
        },
        { lastname: new RegExp(input, "g") },
        { lastname: new RegExp(convertedInput, "g") },
      ],
    })
    .toArray();
  if (result.length > 0) {
    res
      .status(200)
      .json({ status: 200, message: "Player(s) found!", data: result });
  } else {
    res.status(404).json({ status: 404, message: "No player found!" });
  }
  client.close();
};

module.exports = filterPlayers;
