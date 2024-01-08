import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from './Components/Home/Home';

import Signin from './Components/Auth/Signin/Signin';
import "./index.css";
import AddStudent from './Components/AddStudent/AddStudent';
import UpdateStudent from './Components/UpdateStudent/UpdateStudent';
const App = () => {
  
  return (
    <BrowserRouter>
        <Routes>
           
            <Route path='/' element={<Signin />} /> :
            <Route path='/home/' element={<Home />} />
            <Route path='/add-student' element={<AddStudent />} />
            <Route path="/:studentid/update-student" element={<UpdateStudent />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App