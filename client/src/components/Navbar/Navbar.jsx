import React from 'react'
import navImage from "../../assets/plant 1.jpg"
import navImage2 from "../../assets/Chevron Down.png"
import whishList from "../../assets/Heart.png"
import cart from "../../assets/Bag.png"
import user from "../../assets/user_3 1.png"

const Navbar = () => {
  return (
    <div className='w-full'>
        <div className='w-full pt-[15px] pb-[15px] bg-white flex justify-center items-center'>
            <img src={navImage} className='w-[20px]'></img>
            <span className='ml-[5px] text-[20px] font-[600]'>BioSiplen</span>
        </div>
        <nav className='w-full bg-[#1A1A1A] pt-[15px] pb-[15px] flex justify-between items-center'>
            <div className='pl-[10px] pr-[10px] flex justify-around ml-[70px]'>
                <a href='#' className='group ml-[10px] mr-[10px] text-[#808080] flex justify-center items-center hover:text-white'>Home<img src={navImage2} className='ml-[2px] mt-[5px] transition-transform duration-300 group-hover:rotate-180 group-hover:brightness-0 
               group-hover:invert'></img></a>
                <a href='#' className='group ml-[10px] mr-[10px] text-[#808080] flex justify-center items-center hover:text-white'>About<img src={navImage2} className='ml-[2px] mt-[5px] transition-transform duration-300 group-hover:rotate-180 group-hover:brightness-0 
               group-hover:invert'></img></a>
                <a href='#' className='group ml-[10px] mr-[10px] text-[#808080] flex justify-center items-center hover:text-white'>Shop<img src={navImage2} className='ml-[2px] mt-[5px] transition-transform duration-300 group-hover:rotate-180 group-hover:brightness-0 
               group-hover:invert'></img></a>
                <a href='#' className='group ml-[10px] mr-[10px] text-[#808080] flex justify-center items-center hover:text-white'>Blogs<img src={navImage2} className='ml-[2px] mt-[5px] transition-transform duration-300 group-hover:rotate-180 group-hover:brightness-0 
               group-hover:invert'></img></a>
                <a href='#' className='group ml-[10px] mr-[10px] text-[#808080] flex justify-center items-center hover:text-white'>Contact us<img src={navImage2} className='ml-[2px] mt-[5px] transition-transform duration-300 group-hover:rotate-180 group-hover:brightness-0 
               group-hover:invert'></img></a>
            </div>
            <div className='flex items-center'>
                <div className='mr-[170px]'>
                    <form>
                        <input type="text" name="search" id="search" placeholder='Search' className='border-2 border-[#808080] rounded-[3px] rounded-tr-[0px] rounded-br-[0px] bg-transparent pl-[10px] pt-[5px] pb-[5px] pr-[30px] text-white' />
                        <button type='submit' className='bg-[#00B207] pl-[20px] pr-[20px] pt-[7px] pb-[7px] cursor-pointer text-white rounded-tr-[3px] rounded-br-[3px]'>Search</button>
                    </form>
                </div>
                <div className='pl-[10px] pr-[30px] flex'>
                    <a href='#'><img src={whishList} className='w-[21px] ml-1.5 mr-2'></img></a>
                    <a href='$'><img src={cart} className='w-[21px] ml-2 mr-2'></img></a>
                    <a href='%'><img src={user} className='w-[21px] ml-2 mr-2'></img></a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar