console.log("bye");
// ZpsIJs1tixGuX6BK,dNsGumiYKymY5dLu

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware and Routes
app.get("/", (req, res) => {
    res.send("It is working");
});

// Connect to MongoDB and start the server
mongoose.connect("mongodb+srv://admin1:dNsGumiYKymY5dLu@cluster0.mdvv7.mongodb.net/", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
        console.log("Server is running on http://localhost:5000");
    });
})
.catch((err) => console.log(err));
