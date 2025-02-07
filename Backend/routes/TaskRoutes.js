const express = require("express");
const router = express.Router();
const User = require("../modals/user");
const Task = require("../modals/task");

router.post("/add", async (req, res) => {
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

router.get("/", async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json(task);
  } catch (error) {
    console.log("task/get", error);
    res.status(500).json({ message: "internal server error", error: error });
  }
});
router.put("/status", async (req, res) => {
  try {
    const data = req.body;
    const updateTask = await Task.findById(data.id);
    updateTask.status = req.body.status;
    const response = await updateTask.save();
    const task = await Task.find();
    res.status(200).json({ message: "Task Updated", data: task });
  } catch (error) {
    console.log("task/status update", error);
    res.status(500).json({ message: "internal server error", error: error });
  }
});

module.exports = router;
