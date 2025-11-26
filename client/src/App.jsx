// import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
    <Navbar/>
    <Hero/>
    </>
  )
}

export default App
