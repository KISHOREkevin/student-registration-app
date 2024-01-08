import React, { useState } from 'react'
import {Box,TextField,FormLabel,FormControl, Button,Grow} from "@mui/material"
import BASE_URL from '../../Api/Baseurl';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const AddStudent = () => {
  let [inputData,setInputData] = useState({
    studentname:"",
    studentage:0
  })
  let navigate = useNavigate();
  // handles the input data
  let inputHandler = (e)=>{
      let {name,value} = e.target;
      setInputData((prev)=>{ // prev --> history save
          return {
            ...prev,
            [name]:value
          }
      })

  }
  // handles the posting data
  let submitHandler = async (e)=>{
      e.preventDefault();
      await axios.post(`${BASE_URL}/send/userdetails`,inputData);
      navigate("/home");
  }
  return (
    <>
    {localStorage.length===0 ? 
        window.location.href = "/"
    :
    <>
      <Grow in>
      <Box sx={{backgroundColor:"#96EFFF",width:"700px",padding:"30px",margin:"130px 300px",borderRadius:"5px"}} >
          <form  onSubmit={submitHandler}>
              <FormControl fullWidth>
                  <FormLabel htmlFor='studentname'>Enter the student name :</FormLabel><br />
                  <TextField onChange={inputHandler} variant='filled'  type='text' id='studentname' name='studentname' value={inputData.studentname}   required  /><br />
                  <FormLabel htmlFor="studentage">Enter the age :</FormLabel><br />
                  <TextField onChange={inputHandler} variant='filled' type="number" id="studentage" name="studentage" value={inputData.studentage} required />
                  <Button variant='contained' type="submit" style={{marginTop:"5px",backgroundColor:"#5FBDFF",color:"black"}}>Submit</Button>
            </FormControl>
        </form>
    </Box>
    </Grow>
    </>
    
    }
    
    </>
  )
}

export default AddStudent