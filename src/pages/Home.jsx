import "./Home.css"; 
import React from 'react';
import Navbar from '../components/Navigation';
import About from './News';

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1>Selamat datang, <u>user 0000!</u></h1>
    </div>
  );
};

export default Home;