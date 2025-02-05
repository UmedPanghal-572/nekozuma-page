import React, { useState, useEffect } from 'react';
import { NAV } from '../utils/helper';
import layer_blue from '../assets/images/png/blue-layer.png'
import discord from '../assets/images/svg/discord-icon.svg'
import twitter from '../assets/images/svg/twitter-icon.svg'
import bottom_layer from '../assets/images/png/blue-layer-bottom.png'
import brown_fox from '../assets/images/png/brown-fox.png'
import lighting_left from '../assets/images/png/lighting-left.png'
import lighting_right from '../assets/images/png/lighting-right.png'

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (nav && window.innerWidth < 768) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [nav]);

  return (
    <div className='bg-[#1c2430] min-h-screen relative ff-sarabun flex flex-col justify-center items-center'>
      <div className='absolute bottom-0 left-0 hidden lg:block'><img src={lighting_left} alt="light" /></div>
      <div className='absolute right-0 bottom-0 z-[20]'><img src={lighting_right} alt="light" /></div>
      <div className='absolute left-0 top-0'><img src={layer_blue} alt="layer" /></div>

      <div className="container max-w-[1140px] mx-auto px-4 flex justify-between items-center ">

        <a href="/" className="text-white font-normal text-[21.64px] leading-[113%] z-10 pt-7 pb-[30px] ff-franklin">
          NEKOZUMA
        </a>

        {/* Navbar Menu */}
        <ul
          className={`max-md:min-h-screen max-md:top-0 max-md:left-0 max-md:w-screen max-md:justify-center max-md:items-center max-md:bg-[#1c2430] flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-[32px] max-md:fixed transition-transform duration-300 z-30 ${nav ? "max-md:translate-y-0" : "max-md:-translate-y-full"
            }`}
        >
          {NAV.map((obj, index) => (
            <li key={index} className="flex-shrink-0">
              <a
                onClick={handleClick}
                href={obj.link}
                className="text-white font-normal  text-base leading-[130%] transition-transform delay-150 duration-300 ease-in-out hover:scale-110 inline-block link-hover "
              >
                {obj.title}
              </a>
            </li>
          ))}
          <ul className='flex gap-[18px] justify-center items-center'>
            <li className='flex-shrink-0'><a onClick={handleClick} className='transition-transform delay-150 duration-300 ease-in-out hover:scale-120 inline-block' href="/discord"><img src={discord} alt="discord" /></a></li>
            <li className='flex-shrink-0'><a onClick={handleClick} className='transition-transform delay-150 duration-300 ease-in-out hover:scale-120 inline-block' href="/twitter"><img src={twitter} alt="twitter" /></a></li>
          </ul>
        </ul>

        {/* Mobile Menu Toggle */}
        <button onClick={handleClick} className="md:hidden z-40 relative">
          <div className="relative w-7 h-6 flex flex-col justify-between items-center transition-all duration-300">
            <span
              className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${nav ? "rotate-45 translate-y-2.5" : ""
                }`}
            ></span>
            <span
              className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${nav ? "opacity-0" : ""
                }`}
            ></span>
            <span
              className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${nav ? "-rotate-45 -translate-y-2.5" : ""
                }`}
            ></span>
          </div>
        </button>

      </div>
      <div className='flex-grow w-full flex justify-center items-center'>
        <div className="container max-w-[1140px] mx-auto px-3  z-[5]">
          <div className="flex flex-wrap  flex-row px-[-12px] items-center">
            <div className='w-full lg:w-1/2 px-3 mt-[50px] lg:mt-0'>
              <div className='flex justify-center items-center  lg:items-start flex-col'>
                <h1 className='text-[#3586FF] font-normal text-[45px] text-center lg:text-start  md:text-[64px] leading-[113%] mb-[11px] text-main ff-franklin '>NEKOZUMA
                </h1>

                <p className='font-normal text-base leading-[130%] text-[#D4E5FF] mb-[43px] text-center lg:text-start max-w-[502px]'>The collection  of 5555 NFTs on the Solana blockchain. The collection serves to be a rising force against the anime meta of collections with undoxxed teams and is therefore backed by the team at Nubbies NFT & Karmic Labs.</p>
                <button className='font-normal text-base leading-[130%] text-white py-2 px-6 rounded-[9px] bg-[#245AAB] transition-all  duration-500 ease-in-out hover:scale-110 hover:bg-white hover:text-[#245aab]'>Connect Wallet</button>
              </div>
            </div>
            <div className='w-full lg:w-1/2 px-3 mt-6 lg:mt-0 '>
              <div className='lg:absolute bottom-0 right-0 '>
                <div className='relative flex justify-center items-center'>
                  <img className=' hidden lg:block' src={bottom_layer} alt="layer" />
                  <div className='lg:absolute right-0 bottom-0 max-w-[564px] '>
                    <img className='w-full' src={brown_fox} alt="fox" /></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
  );
};

export default Header;
