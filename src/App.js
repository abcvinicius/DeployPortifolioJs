import React, { useEffect, useState }from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Pages from './pages/Pages';
import Routes from './Routes';

import './App.css';

  
function App() {

  
  

  return (
    <BrowserRouter>
      <Navbar />
      <Pages />
      <Routes /> 
    </BrowserRouter>
  );

}


export default App;