const express = require("express");
const router = express.Router();
const Conversation = require("../modals/conversations");
const { jwtAuthMiddleWare } = require("../jwt");
const User = require("../modals/user");
const multer = require("multer");

const storage = multer.memoryStorage();
const upload = multer({ storage });

function updateArrayWithMessage(arr, id, message) {
  return arr.map((item) =>
    item.id === id ? { ...item, message, activeFlag: true } : item
  );
}

function updateActiveFlag(array, id) {
  array.forEach((item) => {
    if (item.id === id) {
      item.activeFlag = false;
    }
  });
  return array;
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

router.post(
  "/photo",
  jwtAuthMiddleWare,
  upload.single("photo"),
  async (req, res) => {
    try {
      const { convId, type, status, senderId, senderName, photo } = req.body;
      const photoBase64 = req.file
        ? `data:image/jpeg;base64,${req.file.buffer.toString("base64")}`
        : photo;
      const Con = await Conversation.findById(convId);
      let receiverId;
      senderId == Con.participant[0]
        ? (receiverId = Con.participant[1])
        : (receiverId = Con.participant[0]);
      const receiver = await User.findById(receiverId);
      const tempArray = updateArrayWithMessage(
        receiver.conversations,
        convId,
        "photo"
      );
      receiver.conversations = tempArray;
      await receiver.save();
      const tempMessage = {
        type: type,
        status: status,
        sender: {
          id: senderId,
          name: senderName,
        },
        message: `${photoBase64}`,
      };
      Con.messages.push(tempMessage);
      await Con.save();
      res.status(200).json("message sent");
    } catch (error) {
      console.log("message/push", error);
      res.status(500).json(error);
    }
  }
);

router.post("/message", jwtAuthMiddleWare, async (req, res) => {
  try {
    const con = await Conversation.findById(req.body.convId);
    res.status(200).json(con);
  } catch (error) {
    console.log("message/get", error);
    res.status(500).json(error);
  }
});

router.get("/chats", jwtAuthMiddleWare, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("conversations");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user.conversations);
  } catch (error) {
    console.log("message/chat", error);
    res.status(500).json(error);
  }
});

router.post("/deactivate", jwtAuthMiddleWare, async (req, res) => {
  try {
    const userId = req.user.id;
    const { convId } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const temp = updateActiveFlag(user.conversations, convId);
    user.conversations = temp;
    await user.save();
    res.status(200).json({ message: "Deactivated sucessfull" });
  } catch (error) {
    console.log("message/deactivate", error);
    res.status(500).json(error);
  }
});

module.exports = router;
