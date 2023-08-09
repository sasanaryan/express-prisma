const express = require("express");
const cors = require("cors");
const postRouter = require("./src/routes/post.router");
const app = express();
app.use(express.json());

var allowlist = ["http://localhost:8911"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true };
  } else {
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));

const port = process.env.URL || 8000;

app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`server is runing on port : ${port}`);
});
