import mongoose from "mongoose";

const studentSchema = mongoose.Schema({
    studentname:{
        type:String,
        required:true
    },
    studentage:{
        type:Number,
        required:true
    }
    
});
// model(collcetion name , Schema)
const Student = mongoose.model("Student",studentSchema);

export default Student;
