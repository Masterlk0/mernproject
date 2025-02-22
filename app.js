const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./Route/userroute");

const app = express();

// Middleware
app.use(express.json());

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the API! Use /users for user-related operations.");
});

// User Routes
app.use("/users", userRoutes);

// MongoDB Connection
mongoose
  .connect("mongodb+srv://admin1:dNsGumiYKymY5dLu@cluster0.mdvv7.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.log(err));
