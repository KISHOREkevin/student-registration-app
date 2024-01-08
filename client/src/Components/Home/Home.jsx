import React from 'react'
import Navbar from './Header/Navbar'
import Students from "./Students/Students";
const Home = () => {
  return (
    <>
   
    {localStorage.length===0 ? 
      window.location.href="/"
    :
        <>
            <Navbar />
            <Students /> 
        </>
    }
      
    
      
    </>
  )
}

export default Home