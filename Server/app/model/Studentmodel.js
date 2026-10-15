const { Schema,model } = require("mongoose");

const Studentschema = new Schema({
    name:{
        type: String,
        require: true
    },
    fathername:{
        type: String,
        require: true
    },
    email:{
        type: String,
    },
    phone:{
        type: String,
        require: true,
        unique: true
    },
    dob:{
        type: Date,
        require:true
    },
})
const Studentmodel = model("Student", Studentschema);
module.exports = Studentmodel;