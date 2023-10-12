import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const routes = require("./Routes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes)

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => app.listen(PORT))
  .then(() =>
    console.log(`Connected To Database and listening at PORT ${PORT}`)
  )
  .catch((err) => console.log(err));