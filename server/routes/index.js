/**
 * Main Router to access other routes
 */

const express = require("express");
const router = express.Router();
const database = require("../db/database");

router.get("/", (_, res) => {
  res.status(200).json({ message: "Hello World from the server API" });
});

// //post request to add to db
// router.post("/data", async (req, res) => {
//   //store json {“username”: “dan”, “comment”: “hello!” } in db
//   if (!req.body.username || !req.body.comment) {
//     res.sendStatus(404);
//     return;
//   }
//   await database.populate(req.body.username, req.body.comment);
//   res.sendStatus(200);
// });

//get request to fetch all items in db
router.get("/data", async (req, res) => {
  let data = await database.getAllEntries();
  res.status(200).json(data);
});

module.exports = router;
