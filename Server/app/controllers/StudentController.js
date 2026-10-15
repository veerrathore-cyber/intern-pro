const mongoose = require("mongoose");
const Studentmodel = require("../model/Studentmodel");
mongoose.connect("mongodb://localhost:27017/studentdb")

const StudentController = {
    async create(req, res) {
        const body = req.body

        if(!body.name){
            res.status(500).send({ message: "Name is required" });   
        }
        else {
        try{
            await Studentmodel.create(body);
        res.send({ message: "Student record created successfully",
            reqBody: body,
         });
         
        }catch (error) {
            console.error("Error creating student record:", error);
            res.status(500).send({ error: error, });
        }

    }
    },

    async readAll(req, res) {
        const students = await Studentmodel.find();
        res.send({ message: "All student records fetched",
            data: students,
         });
    },
    async readOne(req, res) {
        const params = req.params;
        const studentDetail = await Studentmodel.findById(params.id);
        
        res.send({ message: `Student detail found` ,
            data: studentDetail,
        });
    },
    async update(req, res) {
        const params = req.params;
        const body = req.body;
        await Studentmodel.findByIdAndUpdate(params.id, body);
        res.send({ message: `Student record updated` });
    },
    async destroy(req, res) {
        const params =req.params;
        await Studentmodel.findByIdAndDelete(params.id)
        res.send({ message: `Student record deleted`, });
    },
};

module.exports = StudentController;