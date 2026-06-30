const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

router.get("/", async (req, res) => {
  const t = await Testimonial.find().sort({ createdAt: -1 });
  res.json(t);
});

router.post("/", async (req, res) => {
  const t = await Testimonial.create(req.body);
  res.json(t);
});

router.delete("/:id", async (req, res) => {
  await Testimonial.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
