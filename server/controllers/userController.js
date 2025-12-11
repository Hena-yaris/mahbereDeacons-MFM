// controllers/userController.js
const User = require("../models/User");

// Basic validation helper
function validateUserPayload(payload) {
  const requiredFields = ["fullName", "email", "phone", "department", "year"];

  for (const field of requiredFields) {
    if (!payload[field]) {
      return `${field} is required.`;
    }
  }

  return null;
}

exports.registerDeacons = async (req, res) => {
  try {
    // 1. Validate required fields
    const errMsg = validateUserPayload(req.body);
    if (errMsg) return res.status(400).json({ message: errMsg });

    // 2. Prevent attackers from sending extra fields
    const allowedData = {
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone,
      department: req.body.department,
      year: req.body.year,
      kutrNbab: req.body.kutrNbab || [],
      dawitNban: req.body.dawitNban || [],
      zema: req.body.zema || [],
      favoritePsalm: req.body.favoritePsalm || "",
    };

    // 3. Create the user
    const newUser = new User(allowedData);
    await newUser.save();

    return res.status(201).json({
      message: "User Registered Successfully",
      user: newUser,
    });
  } catch (err) {
    console.error("Register error:", err);

    // 4. Handle duplicate email or phone
    if (err.code === 11000) {
      const duplicateField = Object.keys(err.keyValue)[0];
      return res.status(400).json({
        message: `A user with this ${duplicateField} already exists.`,
      });
    }

    // 5. All other errors
    return res.status(500).json({ message: "Server error" });
  }
};

