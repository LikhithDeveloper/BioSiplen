// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from './components/Hero/Hero';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className='w-[100%] h-[100vh] overflow-auto bg-transparent relative'>
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
