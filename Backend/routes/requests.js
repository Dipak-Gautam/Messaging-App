const express = require("express");
const router = express.Router();
const User = require("../modals/user");
const { jwtAuthMiddleWare, generateJWtToken } = require("../jwt");
