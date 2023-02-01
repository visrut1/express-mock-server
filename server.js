const express = require("express")

const app = express();
const port = 3000;

const users = [
  {
    "id": 1,
    "username": "john"
  },
  {
    "id": 1,
    "username": "alex"
  },
  {
    "id": 1,
    "username": "kevin"
  },
  {
    "id": 1,
    "username": "theo"
  },
]

app.get("/users", (req, res) => {
  res.json({users});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
