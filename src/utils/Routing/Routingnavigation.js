import React from 'react'
import { Routes,Route } from "react-router-dom";
import Home from '../../Pages/Homepage/Home';











const Routingnavigation = () => {
  return (
    <Routes>
     <Route path='/' element={<Home></Home>}></Route>
     
    </Routes>
  )
}

export default Routingnavigation