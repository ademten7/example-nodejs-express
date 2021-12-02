//import express
const express = require("express");

//create express server
const app = express();

//serve static files
app.use(express.static(__dirname + "/static"));

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/frontend/index.html");
});
app.get("/profile", (req, res) => {
  res.sendFile(__dirname + "/frontend/profile.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/frontend/contact.html");
});
app.get("/users", (req, res) => {
  res.sendFile(__dirname + "/data/data.json");
});

app.listen(PORT, () => console.log("server is running on port :", PORT));
