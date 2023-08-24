import React from 'react';
import {BiExit} from 'react-icons/bi';
import mainImg from '../images/main-solo-2.png';

const Home = () => {
  const gradientMaskStyle = {
    backgroundImage: 'linear-gradient(to bottom, transparent 80%, #0d0d0d 99%)',
    backgroundBlendMode: 'multiply',
  };
  return (
    <div id='home' className='text-gray-100 flex items-center justify-center w-3/4 min-h-screen gap-14'>
      <div className='relative flex justify-center w-1/3'>
        <img src={mainImg} alt='headshot'/>
        <div
          className="absolute inset-0"
          style={gradientMaskStyle}
        ></div>
      </div>
      <section className='flex flex-col text-3xl gap-4 pt-4 pb-4'>
        <h1 className='text-7xl'>MARC CASTRO</h1>
        <h2 className='text-4xl'>Full Stack Developer</h2>
        <p className='text-2xl'>Los Angeles born, San Francisco based.</p>
        <div className='flex gap-2'>
          <button className='transition ease-in-out duration-200 uppercase text-xl rounded-lg p-2 bg-[#E0A526] text-[#0d0d0d] border-2 border-[#E0A526] hover:bg-[#0d0d0d] hover:text-gray-100'>Hire Me</button> 
          <button className='transition ease-in-out duration-200 flex items-center uppercase text-xl rounded-lg p-2 bg-[#E0A526] text-[#0d0d0d] border-2 border-[#E0A526] hover:bg-[#0d0d0d] hover:text-gray-100'>Resume <BiExit size={25}/></button> 
        </div>   
      </section>
    </div>
  )
}

export default Home;