import React, { useEffect, useState } from 'react'
import {Box,TextField,FormLabel,FormControl, Button,Grow} from "@mui/material"
import axios from "axios";
import BASE_URL from "../../Api/Baseurl.js";
import {useNavigate, useParams} from "react-router-dom"
const UpdateStudent = () => {
  let {studentid} = useParams();
  let navigate = useNavigate();
  let [inputData,setInputData] = useState({
    studentname:"",
    studentage:0
  })
  
  useEffect(()=>{
    let fetchData = async()=>{
      let response = await axios.get(`${BASE_URL}/${studentid}/`);
      let data = response.data;
      setInputData({
        studentname:data.studentname,
        studentage:data.studentage
      })
      
    }
    fetchData();
    
  },[studentid])
  let inputHandler = (e)=>{
      let {name,value} = e.target;
      setInputData((prev)=>{
          return {
            ...prev,
            [name]:value
          }
      })
  }

  let submitHandler = async (e)=>{
    e.preventDefault();
    await axios.put(`${BASE_URL}/${studentid}/update`,inputData);
    navigate("/home");
  }

  return (
    <>
    {localStorage.length === 0 ? 
        window.location.href="/"
      :
      <>
         <Grow in>
      
        <Box sx={{backgroundColor:"#96EFFF",width:"700px",padding:"30px",margin:"130px 300px",borderRadius:"5px"}} >
          <form onSubmit={submitHandler}>
              <FormControl fullWidth>
                  <FormLabel htmlFor='studentname'>Enter the student name :</FormLabel><br />
                  <TextField onChange={inputHandler} variant='filled' type='text' id='studentname' name='studentname' value={inputData.studentname} required /><br />
                  <FormLabel htmlFor="studentage">Enter the age :</FormLabel><br />
                  <TextField onChange={inputHandler} variant='filled' type="number" id="studentage" name="studentage" value={inputData.studentage} required />
                  <Button variant='contained' type='submit' style={{marginTop:"5px",backgroundColor:"#5FBDFF",color:"black"}}>Submit</Button>
              </FormControl>
          </form>
        </Box>
        </Grow>
      </>
      
  }
   
    </>
  )
}

export default UpdateStudent