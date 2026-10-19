const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const StudentController = require('../intern/app/controllers/StudentController') 
const TeacherController = require('../intern/app/controllers/TeacherController')
const {PORT}  = require("../intern/app/utils/constants.utils");
const AuthController = require('../intern/app/controllers/AuthController')
const { AuthMiddleware } = require("./app/middleware/AuthMiddleware");

// const PORT = 5789
mongoose.connect("mongodb://localhost:27017/studentdb")

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to Coding world");
});

app.get("/about", (req, res) => {
    res.send("Something about me");
});


app.post("/student", StudentController.create); 
app.get("/student", StudentController.readAll);
app.get("/student/:id", StudentController.readOne);
app.put("/student/:id", StudentController.update);
app.delete("/student/:id", StudentController.destroy);

app.post("/teacher", TeacherController.create);
app.get("/teacher", TeacherController.readAll);
app.get("/teacher/:id", TeacherController.readOne);
app.put("/teacher/:id", TeacherController.update);
app.delete("/teacher/:id", TeacherController.destroy);

app.post("/register", AuthController.register);
app.post("/login", AuthController.login);

// Server listen
app.listen(PORT, function () {
    let name = "Veer";
    console.log("Hello & Welcome To College, " +name);
    console.log(`Server started at http://localhost:${PORT}`);
});