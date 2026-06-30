const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    location: { type: String, required: true },
    status: {
      type: String,
      enum: ["upcoming", "ongoing", "completed", "sold_out"],
      default: "upcoming",
    },
    bhk_type: { type: String },
    starting_price: { type: String },
    area_sqft: { type: String },
    units: { type: Number },
    bathrooms: { type: Number },
    parking: { type: String },
    overview: { type: String },
    google_maps_link: { type: String },
    vastu_compliant: { type: Boolean, default: false },
    featured: { type: Boolean, default: false },
    amenities: [{ type: String }],
    gallery: [{ type: String }],
    cover_image: { type: String },
  },
  { timestamps: true }, // Automatically adds createdAt and updatedAt
);

module.exports = mongoose.model("Project", projectSchema);
