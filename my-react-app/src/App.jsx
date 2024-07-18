import { useState } from 'react'
import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectStore from './components/selectstore'
import SelectAesthetic from './components/selectesthetic'
import Home from './components/homepage/home/home'
import Quiz from './components/quiz/quiz';
import Minimalist from './components/minimalist/ProductPage';
import Streetwear from './components/streetwear/Streetwear';
import Vintage from './components/Vintage/vintage';

function App() {

  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectStore />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/selectaesthetic" element={<SelectAesthetic />} />
        <Route path="/home/selectaesthetic/quiz" element={<Quiz/>} />
        <Route path="/home/selectaesthetic/minimalist" element={<Minimalist/>} />
        <Route path="/home/selectaesthetic/streetwear" element={<Streetwear/>} />
        <Route path="/home/selectaesthetic/vintage" element={<Vintage/>} />
      </Routes>
    </BrowserRouter> 

  );
}

export default App
