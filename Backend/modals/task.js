const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  assigned: [
    {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      photo: {
        type: String,
      },
    },
  ],
  status: {
    type: String,
    enum: [
      "Not-Started",
      "In-Progress",
      "Partially-Completed",
      "Completed",
      "Stopped",
    ],
  },
  reason: {
    type: String,
  },
});

const Task = mongoose.model("Task", TaskSchema);
module.exports = Task;
