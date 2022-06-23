const express = require("express");
const app = express();

const cors = require("cors");

app.listen(process.env.PORT || 3003, () => {
  console.log("web server started");
});

app.use(cors({ origin: "http://localhost/3003" }));
