const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  messages: [
    {
      type: {
        type: String,
      },
      status: {
        type: String,
        enum: ["hidden" | "visible"],
        default: "visible",
      },
      sender: {
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
      message: {
        type: String,
        required: true,
      },
    },
  ],
});

const Conversation = mongoose.model("Conversation", conversationSchema);
module.exports = Conversation;
