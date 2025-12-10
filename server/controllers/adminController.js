const User =  require("../models/User")


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find(); // fetch all users
    res.status(200).json(users); // send back as JSON
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ message: "Server error" });
  }
};



exports.deleteUsers = async (req, res) => {
  try {
    const { id } = req.params; // get ID from URL
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: "Server error" });
  }
};

