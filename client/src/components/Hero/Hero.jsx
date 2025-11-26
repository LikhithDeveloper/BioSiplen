import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState,useEffect } from 'react'
import v_1 from "../../assets/854014-hd_1920_1080_25fps (online-video-cutter.com).mp4";
import v_2 from "../../assets/3616640-hd_1920_1080_24fps (1) (online-video-cutter.com).mp4";
import v_3 from "../../assets/3783928-hd_1920_1080_24fps (online-video-cutter.com).mp4";

const Hero = () => {
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(prev => (prev >= 3 ? 1 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handelLeft = () => {
    slide > 1 ? setSlide(slide - 1) : null;
  };

  const handelRight = () => {
    slide < 3 ? setSlide(slide + 1) : null;
  };

  return (
    <div className="w-full h-[83.4vh] relative overflow-hidden flex items-start">
      {/* <button
        onClick={handelLeft}
        className="z-50 absolute top-[43%] left-[50px] p-3 rounded-[100%] cursor-pointer hover:bg-gray-200 transition-colors duration-400 opacity-50"
      >
        <IoIosArrowBack size={20} />
      </button>

      <button
        onClick={handelRight}
        className="z-50 absolute top-[43%] right-[50px] p-3 rounded-[100%] cursor-pointer hover:bg-gray-200 transition-colors duration-400 opacity-50"
      >
        <IoIosArrowForward size={20} />
      </button> */}

      <div className='w-[100%] h-[100%] flex flex-col pt-[160px] items-center pr-[70px]'>
        <h1 className='text-[100px] -mb-4 text-white'>BIOSIPLEN</h1>
        <h5 className='text-[15px] m-0 text-white'>NATURALLY NATURING THE EARTH.</h5>
      </div>

      {/* videos */}
      <div className={`-z-10 absolute inset-0 transition-opacity duration-[1200ms] ${slide === 1 ? "opacity-100" : "opacity-0"}`}>
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src={v_3} type="video/mp4" />
        </video>
      </div>

      <div className={`-z-10 absolute inset-0 transition-opacity duration-[1200ms] ${slide === 2 ? "opacity-100" : "opacity-0"}`}>
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src={v_2} type="video/mp4" />
        </video>
      </div>

      <div className={` -z-10 absolute inset-0 transition-opacity duration-[1200ms] ${slide === 3 ? "opacity-100" : "opacity-0"}`}>
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src={v_1} type="video/mp4" />
        </video>
      </div>

    </div>
  );
};

export default Hero;
