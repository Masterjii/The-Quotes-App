const express = require("express");
const app = express();
const mongoose = require("mongoose");
const seedDB = require("./seed");
const cors = require("cors");
const quotesRoutes = require("./apis/quoteRoutes.js");
const dotenv = require('dotenv').config();

let url =
  "mongodb+srv://balram:123@cluster0.2gwzyjt.mongodb.net/QuotesAppretryWrites=true&w=majority";
mongoose
  .connect(url)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log("Error in DB", err);
  });

// ⬇️ app.use(cors());     // this middleware give permission to access any origin

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.use(express.json()); // Body Parser for Json
app.use(express.urlencoded({ extended: true })); // Body Parser for form

app.get("/", (req, res) => {
  res.send("Welcome to Backend");
});

// seedDB();

app.use(quotesRoutes);


app.listen(process.env.PORT, () => {
  console.log(`server is connected at port: ${process.env.PORT}`);
});
