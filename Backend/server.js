const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello from cosmic communication");
});

const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);
const conversationRoutes = require("./routes/Conversation");
const { jwtAuthMiddleWare } = require("./jwt");
app.use("/conv", jwtAuthMiddleWare, conversationRoutes);
const requestRoute = require("./routes/requestRoutes");
app.use("/request", jwtAuthMiddleWare, requestRoute);
const taskRoute = require("./routes/TaskRoutes");
app.use("/task", jwtAuthMiddleWare, taskRoute);
const fileRoute = require("./routes/fileRoutes");
app.use("/file", jwtAuthMiddleWare, fileRoute);

app.listen(port, "0.0.0.0", () => {
  console.log("listening on port 3000");
});
