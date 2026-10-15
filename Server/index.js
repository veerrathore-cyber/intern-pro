const express = require("express");
// Controller ko import karna (dhyan rakhein path aapke folder structure ke according ho)
const StudentController = require('../intern/app/controllers/StudentController') 
const AuthController = require('../intern/app/controllers/AuthController')
const mongoose = require("mongoose");

// const PORT = 9229;
const {PORT}  = require("../intern/app/utils/constants.utils");
const { AuthMiddleware } = require("./app/middleware/AuthMiddleware");
const app = express();


// Postman se JSON data receive karne ke liye middleware
mongoose.connect("mongodb://localhost:27017/studentdb")
app.use(express.json());

// Basic Route[cite: 7]
app.get("/", (req, res) => {
    res.send("Welcome to DPS School API");
});

// === Routes ===[cite: 8]
app.post("/student", StudentController.create); 
app.get("/student", AuthMiddleware, StudentController.readAll);
app.put("/student/:id", StudentController.update);
app.get("/student/:id", StudentController.readOne);
app.delete("/student/:id", StudentController.destroy);

app.post("/Register", AuthController.register);
app.post("/Login", AuthMiddleware, AuthController.login);

// Server listen
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});