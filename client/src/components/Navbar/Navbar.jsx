import React, { useState } from 'react'
import "./Navbar.css"
import Hamburger from 'hamburger-react'
import HiddenOptions from './NavbarCompnents/HiddenOptions';

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
  return (
    <>
    <div className='w-[100%] pt-[10px] pb-[10px] bg-white flex justify-center items-center flex-col lg:bg-transparent fixed'>
        <nav className='w-[95%] h-[80px] bg-white rounded-full border border-gray-300 flex justify-between overflow-hidden lg:border-0'>
            <div className='w-[20%] h-[100%] flex justify-start pl-[30px] items-center lg:pl-[60px]'>
                <h1 className='text-3xl font-bold lg:text-4xl'>BioSiplen</h1>
            </div>
            <div className='h-[100%] pl-[20px] pr-[20px] hidden justify-between items-center lg:flex'>
                <a href='#'>Home</a>
                <a href='#'>Products</a>
                <a href='#'>Services</a>
                <a href='#'>Careers</a>
            </div>
            <div className='w-[20%] h-[100%] hidden items-center justify-end pr-[70px] lg:flex'>
                <button className='pt-[7px] pr-[20px] pb-[7px] pl-[20px] rounded-[5px] bg-blue-500 text-white'>Contact</button>
            </div>
            <div className='w-[20%] h-[100%] flex justify-center items-center lg:hidden'><Hamburger size={25} toggled={isOpen} toggle={setOpen}/></div>
        </nav>
        {isOpen?(<HiddenOptions/>):null}
    </div>

    
    </>
  )
}

export default Navbar