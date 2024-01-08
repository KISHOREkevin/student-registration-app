import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from "axios";
import BASE_URL from '../../../Api/Baseurl.js';
import { Box, Button,TableCell, TableHead, TableRow ,TableContainer,Table,TableBody, Grow, Typography} from '@mui/material';
const Students = () => {
  let [datum,setDatum] = useState([]);
  let [errormsg,setErrorMsg] = useState("");
  
  useEffect(()=>{ // before mounting component and after mounting comp
    let fetchData = async()=>{
      try {
        let response = await axios.get(`${BASE_URL}/`);
        let resdata = response.data;
        console.log(response);
        setDatum(resdata);
      } catch (err) {
         setErrorMsg(err.response.data.error);
      }
     
    }
    fetchData()
  },[])
  let deleteHandler = async (studentid)=>{
      await axios.delete(`${BASE_URL}/${studentid}/delete`)
      let response = await axios.get(`${BASE_URL}/`);
      let resdata = response.data;
      setDatum(resdata);
  }
  
  return (
    <>
  
     <Grow in>
      {errormsg==="" ? (
          <Box sx={{backgroundColor:"#96EFFF",color:"#000",mt:"5px",margin:"30px"}} >
          <TableContainer>
            <Table > 
              <TableHead >
                  <TableRow>
                    <TableCell style={{fontWeight:"bolder"}}>Student Name</TableCell>
                    <TableCell style={{fontWeight:"bolder"}}>Student Age</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                 {datum.map((data)=>{
                    return (
                      <TableRow  key={data._id}>
                      <TableCell>{data.studentname}</TableCell>
                      <TableCell>{data.studentage}</TableCell>
                      <TableCell><Button LinkComponent={NavLink} to={`/${data._id}/update-student`} >update</Button><Button  onClick={()=>deleteHandler(data._id)} sx={{color:"red"}}>delete</Button></TableCell>
                    </TableRow>
                    )
                }) 
                }
           
            </TableBody>
            </Table>
        </TableContainer>
        </Box>
      ) :
          <Typography variant='h3' style={{textAlign:"center"}}>{errormsg}</Typography>
      } 
      
      </Grow>
    </>
  )
}

export default Students