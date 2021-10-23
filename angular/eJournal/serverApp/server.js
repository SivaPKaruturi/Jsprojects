const express = require("express");
const app = express(); //initializes express framework

const bodyParser = require("body-parser");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Enabling CORS
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

//Listening to port 8000
app.listen(8000, () => {
  console.log("Server started!");
});

//Connect to Database
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Developer@ksp28",
  database: "ejournal",
});

connection.connect((error) => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

//GET User
app.route("/api/user").get((req, res) => {
  res.send({
    cats: [{ name: "lilly" }, { name: "lucy" }],
  });
});

//POST User
app.route("/api/user").post((req, res, next) => {
  console.log("Got Request: ", req.body);
  res.status(201).send(body);
  //res.send(201, req.body); Deprecated
});
