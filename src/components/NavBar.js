import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const slideDownAnimationVariants = {
  initial: {
    opacity: 0,
    y: -50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
    }
  },
}

const NavBar = () => {
  const contents = ['about', 'portfolio', 'resume', 'contact'];
  
  useEffect(() => {
    if(window.innerWidth > 768) {
      document.getElementById('navConts').classList.add('flex space-x-4');
    }
  }, [])


  return (
    <motion.nav 
      className='text-sm xs:text-sm md:text-md lg:text-xl flex py-2 px-4 bg-[#0d0d0d] fixed top-0 flex w-full justify-between z-10 text-gray-100 uppercase'
      variants={slideDownAnimationVariants}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
      }}
    >
      <ScrollLink to={'home'} smooth={true} className='transition ease-in-out duration-200 cursor-pointer hover:text-[#E0A526]'>
        <h1 className='p-1'>Marc Castro</h1>
      </ScrollLink>

      <div id='navConts'>
        {contents.map((page) => {
          return (
            <ScrollLink to={page} smooth={true} offset={-40} className='transition ease-in-out duration-200 cursor-pointer hover:text-[#E0A526]'>
              <h1 className='p-1'>{page}</h1>
            </ScrollLink>
          );
        })}
        <a href='https://github.com/majocast' target='_blank' rel='noopener noreferrer'>
          <h1 className='p-1 transition ease-in-out duration-200 cursor-pointer hover:text-[#E0A526]'>Github</h1>
        </a>
        <a href='https://www.linkedin.com/in/marcjgcastro/' target='_blank' rel='noopener noreferrer'>
          <h1 className='p-1 transition ease-in-out duration-200 cursor-pointer hover:text-[#E0A526]'>LinkedIn</h1>
        </a>
      </div>
    </motion.nav>
  )
}

export default NavBar;