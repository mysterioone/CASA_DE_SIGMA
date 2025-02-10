import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News'
import Contact from './pages/Contact';
import Navbar from './components/Navigation';
import Login from './pages/Login';


function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/"element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;