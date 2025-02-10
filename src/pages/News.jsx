import React, { useEffect, useRef } from "react"; 
import Navbar from '../components/Navigation';
import Sound from "../audio/new_home.mp3"; 
import { Link } from "react-router-dom";

const News = () => {
  
 

  return (
    // DISPLAY
    <div>
      <Navbar></Navbar>
      <li>
        <Link to="/home">Homies</Link>
      </li>
      <h1>CASA---DE---SIGMA</h1>
      <p>KINI LEBIH SIGMA</p>



</div>

);
};

export default News;