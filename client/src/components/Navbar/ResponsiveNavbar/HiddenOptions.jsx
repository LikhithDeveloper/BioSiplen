import React from 'react'
import "./HiddenOptions.css"

const HiddenOptions = () => {
  return (
    <div className='hidden-box w-[100%] flex pt-[10px] pb-[10px] h-[100vh] justify-center items-start lg:hidden'>
            <div className=' pt-[10px] pb-[10px] w-[90%] flex items-start flex-col'>
                <a className='p-3' href='#'>Home</a>
                <a className='p-3' href='#'>Products</a>
                <a className='p-3' href='#'>Services</a>
                <a className='p-3' href='#'>Careers</a>
                <button className='ml-7 mt-3 pt-[7px] pr-[20px] pb-[7px] pl-[20px] rounded-[5px] bg-blue-500 text-white'>Contact</button>
            </div>
        </div>
  )
}

export default HiddenOptions;