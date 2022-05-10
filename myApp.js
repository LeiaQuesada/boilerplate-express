let express = require("express");
let app = express();

// Send the /views/index.html file as a response to GET requests to the / path
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
