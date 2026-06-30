// models/Inquiry.js
const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema({
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  subject: String,
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now },
});

// Use this specific export format
module.exports = mongoose.model("Inquiry", InquirySchema);
