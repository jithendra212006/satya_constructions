const express = require("express");
const router = express.Router();
const Inquiry = require("../models/Inquiry");

// GET all inquiries (sorted by date)
router.get("/", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ created_at: -1 });
    res.json(inquiries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch inquiries" });
  }
});

// PATCH to toggle read status
router.patch("/:id", async (req, res) => {
  try {
    const { read } = req.body;
    const updated = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { read },
      { new: true },
    );
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update inquiry" });
  }
});

// DELETE an inquiry
router.delete("/:id", async (req, res) => {
  try {
    await Inquiry.findByIdAndDelete(req.params.id);
    res.json({ message: "Inquiry deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete inquiry" });
  }
});

// POST a new inquiry
router.post("/", async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    const savedInquiry = await newInquiry.save();
    res.status(201).json(savedInquiry);
  } catch (error) {
    console.error("Error saving inquiry:", error);
    res.status(500).json({ error: "Failed to save inquiry" });
  }
});

module.exports = router;
