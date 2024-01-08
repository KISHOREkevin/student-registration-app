import express from "express";
const route = express.Router(); 
import { deleteStudent, getStudents, postUserDetails,getaStudent , updateStudent } from "../controller/controller.js";
route.get("/",getStudents);
route.get("/:studentid",getaStudent);
route.post("/send/userdetails",postUserDetails);
// route.post("/validate",studentAuth);
route.delete("/:studentid/delete",deleteStudent);
route.put("/:studentid/update",updateStudent);
// route.get("/",(req,res)=>{
    //  res.send("<h1>hello prathap</h1>");
//})

export default route; 