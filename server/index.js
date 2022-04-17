const express = require("express");
const app = express();
const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "crud",
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Asakusa kid', 'it reminds of Japanese Showa era');";
  console.log("process.env.DB_HOST", process.env.DB_HOST);
  db.query(sqlInsert, (err, result) => {
    res.send("Hello Marie");
    // console.log(err);
  });
});

app.listen("3001", () => {
  console.log("running on port 3001");
});
