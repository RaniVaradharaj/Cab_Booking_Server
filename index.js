const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");

app.listen(process.env.PORT || 3003, () => {
  console.log("Web server Fired");
});

app.use(cors({ origin: "http://localhost/3003" }));
// https://git.heroku.com/cabbookingserver.git