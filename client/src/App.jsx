// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from './components/Home/Home';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className='w-[100%] h-[100vh] overflow-auto bg-blue-300 relative'>
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
