import React, { useState } from 'react'
import "./Navbar.css"
import Hamburger from 'hamburger-react'
import HiddenOptions from './ResponsiveNavbar/HiddenOptions';
import Card from './Cards/Card';
import logo from "../../assets/BioSiplen-removebg-preview.png"

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const [hover, setHover] = useState(false)
    const [hoverbtn, sethoverbtn] = useState("");
    const enableCrad = () => {
        setHover(true);
    }
    const disableCrad = () => {
        setHover(false);
    }
    const btnhover = (name) => {
        sethoverbtn();
        if(name == "Services"){
            sethoverbtn("Services")
        }else{
            sethoverbtn("Products")
        }
    }
    const [anime, setAnime] = useState(false);
    const handelAnime = () => {
        setAnime(false); 
        setTimeout(() => setAnime(true), 10);
    };
  return (
    <>
    <div className='w-[100%] pt-[30px] pb-[10px] bg-white  flex justify-center items-center flex-col lg:bg-transparent fixed z-10' onMouseLeave={disableCrad}>
        <nav className='w-[95%] h-[70px] bg-white/30 backdrop-blur-[3px] rounded-[9px] border border-gray-300 flex justify-between overflow-hidden lg:border-0'>
            <div className='w-[20%] h-[100%] flex justify-start pl-[30px] items-center lg:pl-[60px]'>
                {/* <h1 className='text-3xl font-bold lg:text-4xl'>BioSiplen</h1> */}
                <img src={logo} className='w-[110px]'></img>
            </div>
            <div className='h-[100%] pl-[20px] pr-[20px] hidden justify-between items-center lg:flex'>
                <a href='#'>Home</a>
                <a href='#' onMouseEnter={() => {
                    enableCrad();
                    btnhover("Products");
                    handelAnime();
                }}>Products</a>
                <a href='#' onMouseEnter={() => {
                    enableCrad();
                    btnhover("Services");
                    handelAnime();
                }}>Services</a>
                <a href='#'>Careers</a>
            </div>
            <div className='w-[20%] h-[100%] hidden items-center justify-end pr-[70px] lg:flex'>
                <button className='pt-[7px] pr-[20px] pb-[7px] pl-[20px] rounded-[5px] bg-[#028A48] text-white'>Contact</button>
            </div>
            <div className='w-[20%] h-[100%] flex justify-center items-center lg:hidden'><Hamburger size={25} toggled={isOpen} toggle={setOpen}/></div>
        </nav>
        {isOpen?(<HiddenOptions/>):null}
        {hover?<Card btndetails={{hoverbtn,anime}} />:null}
    </div>    
    </>
  )
}

export default Navbar