const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const cors = require('cors')
let data = require("./data.json");
const port = process.env.PORT || 3001;

app.use(cors())
// app.get("/pokemon", (req, res) => {
//     req.send
// });

app.get("/pokemon", (req, res) => {
  res.send(data);
});

app.get("/pokemon/:id", (req, res) => {
  const { id } = req.params;
// everything that comes from req.params is a string

  const result = data.filter((entry) => entry.id === Number(id));
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
