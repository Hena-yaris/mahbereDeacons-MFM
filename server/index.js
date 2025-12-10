const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes =require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes")
const PORT = process.env.PORT || 5000;



const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/deacons",userRoutes);
app.use("/api/admin",adminRoutes)



// MONGO CONNECT
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected Successfully"))
  .catch((err) => console.log("MongoDB Error: ", err));

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("API is running...");
});











app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

});