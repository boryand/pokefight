const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const port = process.env.PORT || 3001;
let data = require("./data.json");

app.get("/", (req, res) => {
  console.log(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
