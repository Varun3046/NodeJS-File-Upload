const express = require("express");

const app = express();
var bodyParser = require("body-parser");
const formidable = require("formidable");

const PORT = 8080;
var cors = require("cors");
app.use(cors());

app.use(express.static("public"));
app.use("/images", express.static("images"));

app.post("/submit", (req, res) => {
  const form = new formidable.IncomingForm();
  form.uploadDir = __dirname + "/public/images";
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    console.log(err, fields, files);
    res.send({ success: true, file: files.file.path });
  });
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
