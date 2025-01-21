const express = require("express");
const router = express.Router();
const Conversation = require("../modals/conversations");
const { jwtAuthMiddleWare } = require("../jwt");

router.post("/", jwtAuthMiddleWare, async (req, res) => {
  try {
    const data = req.body;
    const Con = await Conversation.findById(req.body.convId);
    Con.messages.push(data.message);
    await Con.save();
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
