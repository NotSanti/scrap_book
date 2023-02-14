/**
 * @author Santiago Luna
 * @desc handles connecting, populating and querying from db
 */

const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const DB_NAME = "scrap_book";
const COLLECTION_NAME = "pictures";
let database;

const Switch = require("react-switch");
Switch.default;

async function connect() {
  console.log("connecting....");
  await client.connect();
  console.log("connected to server!");
  const db = client.db(DB_NAME);
  database = db;
  return db;
}

async function populate(date, desc, image) {
  console.log("populating db...");
  let data = { image_url: image, description: desc, date: date };
  await database.collection(COLLECTION_NAME).insertOne(data);
  console.log("populated db!");
}

async function getAllEntries() {
  console.log("fetching from db...");
  let data = await database.collection(COLLECTION_NAME).find().toArray();
  data.forEach((x) => delete x["_id"]);
  console.log("fetched from db!");
  return data;
}

// async function removeComment(name, comment) {
//   console.log(`deleting ${name} || ${comment}`);
//   await database
//     .collection("posts")
//     .deleteOne({ username: name, comment: comment });
// }

// async function removeImage(name, url) {
//   await database.collection("images").deleteOne({ name: name, image_url: url });
// }

module.exports = {
  populate: populate,
  getAllEntries: getAllEntries,
  connect: connect,
};
