const mongoose = require("mongoose");
const Teachermodel = require("../model/Teachermodel");
mongoose.connect("mongodb://localhost:27017/studentdb")

const TeacherController = {
    async create(req, res) {
        const body = req.body

        if(!body.name){
            res.status(500).send({ message: "Teacher Name is required" });   
        }
        else {
        try{
            await Teachermodel.create(body);
        res.send({ message: "Teacher record created successfully",
            reqBody: body,
         });
         
        }catch (error) {
            console.error("Error creating Teacher record:", error);
            res.status(500).send({ error: error, });
        }

    }
    await Teachermodel.create("body")
    },

    async readAll(req, res) {
        const Teacher = await Teachermodel.find();
        res.send({ message: "All Teacher records fetched",
            data: Teacher,
         });
    },
    async readOne(req, res) {
        const params = req.params;
        const TeacherDetail = await Teachermodel.findById(params.id);
        
        res.send({ message: `Teacher detail found` ,
            data: TeacherDetail,
        });
    },
    async update(req, res) {
        const params = req.params;
        const body = req.body;
        await Teacher.findByIdAndUpdate(params.id, body);
        res.send({ message: `Teacher record updated` });
    },
    async destroy(req, res) {
        const params =req.params;
        await Teachertmodel.findByIdAndDelete(params.id)
        res.send({ message: `Teacher record deleted`, });
    },
};

module.exports = TeacherController;