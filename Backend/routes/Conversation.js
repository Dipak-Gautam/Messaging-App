const express = require("express");
const router = express.Router();
const Conversation = require("../modals/conversations");
const { jwtAuthMiddleWare, generateJWtToken } = require("../jwt");

router.post("/", jwtAuthMiddleWare, async (req, res) => {
  try {
    console.log("message . add called");
  } catch (error) {
    console.log("message/push", error);
    res.status(500).json(error);
  }
});

module.exports = router;
