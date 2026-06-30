const express = require("express");
const router = express.Router();
const upload = require("../config/cloudinary");

// Endpoint for the single cover image
router.post("/cover", upload.single("cover_image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  // req.file.path automatically contains the permanent secure Cloudinary URL
  res.status(200).json({ url: req.file.path });
});

// Endpoint for multiple gallery images (up to 5)
router.post("/gallery", upload.array("gallery_images", 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }
  const urls = req.files.map((file) => file.path);
  res.status(200).json({ urls });
});

module.exports = router;
