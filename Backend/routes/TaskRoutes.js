const express = require("express");
const router = express.Router();
const User = require("../modals/user");
const Task = require("../modals/task");

router.post("/add", async (req, res) => {
  Task;
  try {
    const data = req.body;
    const newTask = new Task(data);
    await newTask.save();
    res.status(200).json("Task Added sucessfully");
  } catch (error) {
    console.log("task/add", error);
    res.status(500).json({ message: "internal server error", error: error });
  }
});

module.exports = router;
