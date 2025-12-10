// models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // -----------------------------
    // Personal Information
    // -----------------------------
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // <--- ADD THIS LINE
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
    },

    // -----------------------------
    // College Information
    // -----------------------------
    department: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },

    // -----------------------------
    // Spiritual Knowledge / Skills
    // -----------------------------
    kutrNbab: {
      type: [String], // array of selected items
      default: [],
    },
    dawitNban: {
      type: [String],
      default: [],
    },
    zema: {
      type: [String],
      default: [],
    },

    // -----------------------------
    // Optional Open Text
    // -----------------------------
    favoritePsalm: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
