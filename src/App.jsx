import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import './App.module.css';
import Home  from './Home';
import About  from './About';
import {Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

 
 

const App =() =>{
  return(
    <>
    <Navbar/>
    <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="*"  element={<Home />} />
    </Routes>
 
    </>
  );
};
export default App;
