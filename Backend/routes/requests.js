const express = require("express");
const router = express.Router();
const User = require("../modals/user");
const { jwtAuthMiddleWare } = require("../jwt");

router.post("/", jwtAuthMiddleWare, async (req, res) => {
  try {
    console.log("request received");
  } catch (error) {
    console.log("request", error);
    res.status(500).json({ message: "internal server error", error: error });
  }
});

module.exports = router;
