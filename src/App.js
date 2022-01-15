import React from 'react';
import './style.css';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


export default function App(){
  return(
    <div>
      <div>
        <Home/>
        <About/>
        <Contact/>
       </div>
       <Router>
         <Roiuter>
              <Route path="/" element={<Home/>} />
              <Route path="/About" element={<About/>} />
              <Route path="/Contact" element={<Contact/>} />
         </Roiuter>
       </Router>
    </div>
  );
}
