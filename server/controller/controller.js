import Student from "../model/model.js";
import bcrypt from "bcrypt";
const getStudents = async (req,res)=>{
    let students;
    try {
    
        students = await Student.find(); 
        if(students.length === 0){ //[{name,age}]
            return res.status(404).json({error:"Students not found..."})
        }
        return res.status(200).json(students);
    } catch (error) {
        console.log(error);
    }
}

const getaStudent= async (req,res)=>{
    let {studentid} = req.params;
    let student;
    try {
        student = await Student.findById(studentid); 
        if(!student){
            return res.status(404).json({error:"Student not found ..."});
        }
        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
    }
}

 
const postUserDetails = async (req,res)=>{
    let {studentname,studentage} = req.body;
    let student;
    try {
        student = new Student({
           studentname,
           studentage
        })
        
        await student.save();
        return res.status(200).json({message:"student Created .."});
    } catch (error) {
        console.log(error);
    }
}

// let studentAuth = async (req,res)=>{
//     let {password,username} = req.body;
//     let valid = false;
//     let student;
//     let unhashedPassword;
//     try {
//         student = await Student.findOne({name:username}); // {"prathap",20,dihdei}
//         if(!student){
//             return res.status(404).json({error:"Student not found .."})
//         }
//         unhashedPassword = bcrypt.compareSync(password,student.password);
//         if(!unhashedPassword){
//             valid = false;
//             return res.status(200).json({message:valid});
//         }
//         valid = true;
//         return res.status(200).json({message:valid});
       
//     } catch (error) {
//         console.log(error);
//     }
// }
let deleteStudent = async (req,res)=>{
    let {studentid} = req.params;
    let student;
    try {
        student = await Student.findByIdAndDelete(studentid);
        if(!student){
            return res.status(404).json({error:"Student Not found .."})
        }
        
        return res.status(200).json({message:"Student Deleted"});
    } catch (error) {
        console.log(error);
    }
}

let updateStudent = async (req,res)=>{
    let {studentid} = req.params;
    let {studentname,studentage} = req.body;
    let student;
    try {
        student = await Student.findByIdAndUpdate(studentid,{studentname,studentage});
        if(!student){
            return res.status(404).json({error:"Student Not found .."});
        }
        return res.status(200).json({message:"Student Updated ..."});
    } catch (error) {
        console.log(error);
    }
}



export {postUserDetails,getStudents,deleteStudent,updateStudent,getaStudent};