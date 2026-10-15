const { Schema,model } = require("mongoose");

const Teacherschema = new Schema({
    name:{
        type: String,
        require:true
    },
    fathername:{
        type: String,
    },
    email:{
        type: String,
    },
    phone:{
        type: String,
        require:true,
        unique:true
    },
    dob:{
        type: Date,
        require:true
    }
})
const Teachermodel = model("Teacher", Teacherschema);
module.exports = Teachermodel;