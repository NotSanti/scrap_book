/**
 * This is the main entry point of the application.
 * Api is being listened in bin/www
 */
const Switch = require("react-switch");
Switch.default;
const express = require("express");
const routes = require("./routes/index");
// const imageRoutes = require("./routes/images");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const app = express();
const database = require("./db/database");

let connection = async () => {
  await database.connect();
};
connection();

// Serving files from client/build
app.use(express.static("../client/dist"));

//allow json
app.use(express.json());
// All routes will be handled by routes/index.js
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());

app.use("/api", routes);
// app.use("/api", imageRoutes);

// Default 404 route
app.use((_, res) => {
  res.sendStatus(404);
});

module.exports = app;
