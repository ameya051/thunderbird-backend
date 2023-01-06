const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

//connecting to database
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to thunderbird API");
});

//middlewares
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);
app.use(notFound);
app.use(errorHandler);

port = process.env.PORT || 5000;

//server starts listening
app.listen(port, console.log(`server listening on http://localhost:${port}`));
