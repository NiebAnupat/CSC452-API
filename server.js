import express from "express";
import * as dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT) || 3000;
const DB_URL = process.env.DB_URL;

const conn = mysql.createConnection(DB_URL);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/attractions", (req, res) => {
  conn.query("SELECT * FROM attractions", (err, results, fields) => {
    res.send(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ⚡`);
});
