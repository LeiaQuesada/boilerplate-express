let express = require("express");
let app = express();
let bodyParser = require("body-parser");

require("dotenv").config();

// bodyParser needs to be declared at the top of the file
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Logger, needs to be at the top to catch all requests
app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

// Normal usage
app.use(express.static(__dirname + "/public"));

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({
      message: "HELLO JSON",
    });
  } else {
    res.json({
      message: "Hello json",
    });
  }
});

// Given the endpoint URL, /name?first=firstname&last=lastname
app.get("/name", function (req, res) {
  // const firstName = req.query.first;
  // const lastName = req.query.last;
  // OR you can destructure and rename the keys
  const { first: firstName, last: lastName } = req.query;
  // Use template literals to form a formatted string
  res.json({
    name: `${firstName} ${lastName}`,
  });
});

app.get(
  "/now",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.json({
      time: req.time,
    });
  }
);

app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word,
  });
});

// Send the /views/index.html file as a response to GET requests to the / path
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

module.exports = app;
