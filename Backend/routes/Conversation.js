const express = require("express");
const router = express.Router();
const Conversation = require("../modals/conversations");
const { jwtAuthMiddleWare } = require("../jwt");
const User = require("../modals/user");

function updateArrayWithMessage(arr, id, message) {
  return arr.map((item) =>
    item.id === id ? { ...item, message, activeFlag: true } : item
  );
}

router.post("/", jwtAuthMiddleWare, async (req, res) => {
  try {
    const data = req.body;
    const Con = await Conversation.findById(req.body.convId);
    let receiverId;
    data.message.sender.id == Con.participant[0]
      ? (receiverId = Con.participant[1])
      : (receiverId = Con.participant[0]);
    const receiver = await User.findById(receiverId);
    const tempArray = updateArrayWithMessage(
      receiver.conversations,
      data.convId,
      data.message.message
    );
    receiver.conversations = tempArray;
    Con.messages.push(data.message);
    await Con.save();
    await receiver.save();
    res.status(200).json("message sent");
  } catch (error) {
    console.log("message/push", error);
    res.status(500).json(error);
  }
});

router.post("/message", jwtAuthMiddleWare, async (req, res) => {
  try {
    const con = await Conversation.findById(req.body.convId);
    res.status(200).json(con);
  } catch (error) {
    console.log("message/get", error);
    res.status(500).json(error);
  }
});

module.exports = router;
