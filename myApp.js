let express = require("express");
let app = express();

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res) {
  res.json({
    message: "Hello json",
  });
});

// Send the /views/index.html file as a response to GET requests to the / path
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
