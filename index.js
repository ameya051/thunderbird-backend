const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: "./config/.env" });
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to thunderbird API");
});

app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);

port = process.env.PORT || 5000;

app.listen(port, console.log(`server listening on http://localhost:${port}`));
