const express = require("express");
const router = express.Router();
const User = require("../modals/user");
const { jwtAuthMiddleWare } = require("../jwt");

router.post("/", jwtAuthMiddleWare, async (req, res) => {
  try {
    data = req.body;
    const user = await User.findById(data.searchId);
    user.requests.push({ id: data._id, name: data.name, photo: data.photo });
    await user.save();
    res.status(200).json("request send sucessfully");
  } catch (error) {
    console.log("request", error);
    res.status(500).json({ message: "internal server error", error: error });
  }
});

router.post("/accept", jwtAuthMiddleWare, async (req, res) => {
  try {
  } catch (error) {
    console.log("request", error);
    res.status(500).json({ message: "internal server error", error: error });
  }
});

module.exports = router;
