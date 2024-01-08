import React, { useState } from 'react'
import {Box,TextField,FormLabel,FormControl, Button,Grow, Typography} from "@mui/material"
import {useNavigate} from "react-router-dom";

const Signin = () => {
  let [inputData,setInputData] = useState({
    adminname:"",
    adminpassword:""
  })
  let [errormsg,setErrormsg] = useState({
    message:""
  })
  let navigate = useNavigate()
  let inputHandler = (e)=>{
      let {name,value} = e.target;
      setInputData((prev)=>{
        return {
          ...prev,
          [name]:value
        }
      })
  }
 
  let submitHandler = (e)=>{
    e.preventDefault();
    localStorage.setItem("adminname",inputData.adminname);
    localStorage.setItem("adminpassword",inputData.adminpassword);
    let adminName = localStorage.getItem("adminname");
    let adminPassword = localStorage.getItem("adminpassword");
    if((adminName===String(process.env.REACT_APP_ADMIN_NAME) && adminPassword === String(process.env.REACT_APP_ADMIN_PASSWORD))){
        
      navigate("/home");
    }else{
      if((adminName!==String(process.env.REACT_APP_ADMIN_NAME) && adminPassword !== String(process.env.REACT_APP_ADMIN_PASSWORD))){
        setErrormsg({message:"Admin name and password are wrong ..."})
      }
      else if(adminName !== String(process.env.REACT_APP_ADMIN_NAME)){
        setErrormsg({message:"Admin name is incorrect ..."});
      }else if(adminPassword !== String(process.env.REACT_APP_ADMIN_PASSWORD)){
        setErrormsg({message:"Admin password is incorrect ..."});
      }
     
      navigate("/");
    }
  }
  return (
    <Grow in>
     
    <Box sx={{backgroundColor:"#96EFFF",width:"700px",padding:"30px",margin:"130px 300px",borderRadius:"5px"}} >
      <Typography variant='body1' style={{textAlign:"center",color:"red"}}>{errormsg.message}</Typography>
        <form onSubmit={submitHandler}> 
          
            <FormControl fullWidth>
                <FormLabel htmlFor='adminname'>Enter the admin name :</FormLabel><br />
                <TextField onChange={inputHandler} variant='filled' type='text' id='adminname' name='adminname' value={inputData.adminname} required /><br />
                <FormLabel htmlFor="adminpassword">Enter the admin password :</FormLabel><br />
                <TextField onChange={inputHandler} variant='filled' type="password" id="adminpassword" name="adminpassword" value={inputData.adminpassword} required />
                <Button  type='submit' variant='contained' style={{marginTop:"5px",backgroundColor:"#5FBDFF",color:"black"}}>Submit</Button>
            </FormControl>
        </form>
    </Box>
    </Grow>
  )
}

export default Signin