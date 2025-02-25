const express = require("express");
const multer = require("multer");
const File = require("../modals/filesStore");
const Conversation = require("../modals/conversations");
const path = require("path");
const fs = require("fs");

const router = express.Router();

// Storage setup for files (including audio)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "uploads/";
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // Limit file size to 50MB
});

// 📂 General File Upload Route
router.post(
  "/upload/:conversationId",
  upload.single("file"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
      const { conversationId } = req.params;
      const { senderId, senderName } = req.body;

      const newFile = new File({
        filename: req.file.filename,
        fileType: req.file.mimetype,
        filePath: req.file.path,
        size: req.file.size,
        conversationId,
      });

      await newFile.save();

      await Conversation.findByIdAndUpdate(conversationId, {
        $push: {
          messages: {
            type: "file",
            fileId: newFile._id,
            message: "file",
            sender: {
              id: senderId,
              name: senderName,
            },
          },
        },
      });

      res
        .status(201)
        .json({ message: "File uploaded successfully", file: newFile });
    } catch (error) {
      console.error("Error uploading file:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// 🔊 Audio File Upload Route (Same Collection)
router.post(
  "/upload/audio/:conversationId",
  upload.single("audio"),
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No audio file uploaded" });
      }

      const { conversationId } = req.params;
      const { senderId, senderName } = req.body;

      const newFile = new File({
        filename: req.file.filename,
        fileType: req.file.mimetype,
        filePath: req.file.path,
        size: req.file.size,
        conversationId,
      });

      await newFile.save();

      await Conversation.findByIdAndUpdate(conversationId, {
        $push: {
          messages: {
            type: "audio",
            fileId: newFile._id,
            message: "Audio message",
            sender: {
              id: senderId,
              name: senderName,
            },
          },
        },
      });

      res
        .status(201)
        .json({ message: "Audio uploaded successfully", file: newFile });
    } catch (error) {
      console.error("Error uploading audio:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// 📥 Get File (Including Audio)
router.get("/:fileId", async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }
    res.sendFile(path.resolve(file.filePath));
  } catch (error) {
    console.error("Error retrieving file:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// ❌ Delete File (Including Audio)
router.delete("/:fileId", async (req, res) => {
  try {
    const file = await File.findById(req.params.fileId);
    if (!file) {
      return res.status(404).json({ message: "File not found" });
    }

    // Delete file from disk
    fs.unlinkSync(file.filePath);

    // Remove from database
    await File.findByIdAndDelete(req.params.fileId);

    res.json({ message: "File deleted successfully" });
  } catch (error) {
    console.error("Error deleting file:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
