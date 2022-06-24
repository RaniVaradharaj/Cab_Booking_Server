const express = require("express");
const app = express();

const cors = require("cors");
const { param } = require("express/lib/request");

const mongodb = require("mongodb");

const mongoClient = mongodb.MongoClient;
const URL =
  "mongodb+srv://rani:Mymongodb#123@cluster0.aj2dp.mongodb.net/?retryWrites=true&w=majority";

app.use(express.json());

app.listen(process.env.PORT || 3001, () => {
  console.log("Web server Fired");
});

app.use(cors({ origin: "http://localhost/3000" }));
// https://git.heroku.com/cabbookingserver.git