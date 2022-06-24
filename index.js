const express = require("express");
const app = express();

const cors = require("cors");
const { param } = require("express/lib/request");

const mongodb = require("mongodb");

const mongoClient = mongodb.MongoClient;
// const URL =
//   "mongodb+srv://rani:Mymongodb#123@cluster0.aj2dp.mongodb.net/?retryWrites=true&w=majority";

const URL = "mongodb://localhost:27017"; //since im running in my system for now:

app.post("/register", async (req, res) => {
  try {
    //open the connection
    let connection = mongoClient.connect(URL);
    //select  the db
    let db = (await connection).db("cabbooking");
    //select the collection
    //Do the operation
    await db.collection("users").insertOne(req.body);
    res.json({ message: "user created" });
    (await connection).close();
  } catch {
    res.status(500).json({ messaage: "Something went wrong" });
  }
});

app.use(express.json());

app.listen(process.env.PORT || 3001, () => {
  console.log("Web server Fired");
});

app.use(cors({ origin: "http://localhost/3000" }));
// https://git.heroku.com/cabbookingserver.git