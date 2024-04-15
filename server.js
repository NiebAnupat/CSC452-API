import express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT) || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ⚡`);
});
