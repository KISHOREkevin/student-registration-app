import React from 'react'
import {Box,Typography} from "@mui/material";
const Navbar = () => {
  let logoutHandler = ()=>{
    localStorage.removeItem("adminname");
    localStorage.removeItem("adminpassword");
  }
  return (
    <Box sx={{backgroundColor:"#96EFFF",borderRadius:"5px",padding:"5px 3px"}}>
        <Typography variant='h1' style={{fontSize:"40px",display:"inline-block"}}>Student Registration</Typography>
        <ul style={{display:"inline-block",float:"right",fontSize:"20px",margin:"-1px"}}>
            <a href="/add-student" style={{textDecoration:"none"}}><li style={{color:"#000",borderRadius:"5px",padding:"10px 30px",margin:"0 5px",listStyleType:"none",backgroundColor:"#5FBDFF",display:"inline-block"}}>Add Student</li></a>
            <a onClick={logoutHandler} href="/" style={{textDecoration:"none"}}><li style={{color:"#000",borderRadius:"5px",padding:"10px 30px",listStyleType:"none",backgroundColor:"#5FBDFF",display:"inline-block"}} >Logout</li></a>
        </ul>
    </Box>
  )
}

export default Navbar