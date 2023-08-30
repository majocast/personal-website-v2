import React from 'react';
import { BiArrowToBottom } from 'react-icons/bi';
import mainImg from '../images/main-solo-2.png';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const bounceAnimation = {
  animate: {
    y: [0,-10, 0],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse',
    }
  },
}

const Home = () => {
  const gradientMaskStyle = {
    backgroundImage: 'linear-gradient(to bottom, transparent 80%, #0d0d0d 99%)',
    backgroundBlendMode: 'multiply',
  };
  return (
    <motion.div 
      id='home' 
      className='text-gray-100 flex flex-col md:flex-row lg:flex-row items-center justify-center w-3/4 min-h-screen gap-14'
      variants={fadeInAnimationVariants}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
      }}
    >
      <div 
        className='relative flex justify-center w-0 md:w-1/3 lg:w-1/3'>
        <img src={mainImg} alt='headshot'/>
        <div
          className='absolute inset-0'
          style={gradientMaskStyle}
        ></div>
      </div>
      <section className='flex flex-col gap-4 pt-4 pb-4'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl text-[#E0A526]'>MARC CASTRO</h1>
        <h2 className=' text-3xl lg:text-4xl'>Full Stack Developer</h2>
        <p className='text-xl lg:text-2xl'>Los Angeles born, San Francisco based.</p>   
      </section>
      <motion.div
        className='absolute bottom-5 text-[#E0A526]'
        variants={bounceAnimation}
        animate='animate'
      >
        <BiArrowToBottom size={50}/>
      </motion.div>
    </motion.div>
  )
}

export default Home;