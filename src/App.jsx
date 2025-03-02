import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Removed <Router>
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Program from './Components/Program/Program';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import University from './Components/University/University';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/program" element={<Program />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/university" element={<University />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
