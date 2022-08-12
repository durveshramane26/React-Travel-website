import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './components/Pages/Home'; 

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />} />
        </Routes> 
      </Router>
    </>
  );
}

export default App;

//This project is based on how an effective travel website will make us feel. It is based on a traveling website with fully-featured functions that will activate the traveling bug with vibrant imager…
