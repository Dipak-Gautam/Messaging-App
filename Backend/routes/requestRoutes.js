const express = require("express");
const router = express.Router();
const User = require("../modals/user");
const Conversation = require("../modals/conversations");
const { jwtAuthMiddleWare } = require("../jwt");

function removeById(array, id) {
  return array?.filter((item) => item.id !== id);
}

router.post("/", jwtAuthMiddleWare, async (req, res) => {
  try {
    const data = req.body;
    const user = await User.findById(data.searchId);
    user.requests.push({ id: req.user.id, name: data.name, photo: data.photo });
    await user.save();
    res.status(200).json("request send sucessfully");
  } catch (error) {
    console.log("request", error);
    res.status(500).json({ message: "internal server error", error: error });
  }
});

router.post("/accept", jwtAuthMiddleWare, async (req, res) => {
  try {
    const data = req.body;
    const ownId = req.user.id;
    const ConversationsTemp = {
      participant: [data.id, ownId],
    };
    const newConversation = new Conversation(ConversationsTemp);
    newConversation.participant = [ownId, data.id];
    await newConversation.save();
    const conResponse = await newConversation.save();
    const own = await User.findById(ownId);
    const friend = await User.findById(data.id);
    const tempRequest = removeById(own.requests, data.id);
    own.requests = tempRequest;
    own.conversations.push({ id: conResponse.id, name: friend.name });
    await own.save();
    friend.conversations.push({ id: conResponse.id, name: own.name });
    await friend.save();
    res.status(200).json("request accepted");
  } catch (error) {
    console.log("request", error);
    res.status(500).json({ message: "internal server error", error: error });
  }
});

module.exports = router;
