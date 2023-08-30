import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const slideDownVariants = {
  visible: { 
    y: '0%', 
  },
  hidden: { 
    y: '-100%',
  },
};

const NavBar = () => {
  const contents = ['about', 'portfolio', 'resume', 'contact'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if(window.innerWidth >= 768) {
      document.getElementById('navConts').classList.add('flex', 'space-x-4');
      document.getElementById('menuButton').classList.add('hidden');
    } else {
      const navConts = document.getElementById('navConts');
      navConts.classList.add('hidden');
      document.getElementById('menuButton').classList.add('flex');
      const menuItems = navConts.children;
      console.log(menuItems);
      for(const menuItem of menuItems) {
        menuItem.addEventListener('click', handleOpenMenu);
      }
      setIsMobile(!isMobile);
    }
  }, [])

  const handleOpenMenu = () => {
    const navConts = document.getElementById('navConts');
    if(!isMenuOpen) {
      setIsMenuOpen(!isMenuOpen);
      navConts.classList.remove('hidden');
      navConts.classList.add('absolute', 'h-screen', 'w-screen', 'bg-[#E0A526]', 'left-0', 'top-0', 'flex', 'flex-col', 'items-center', 'justify-center');
      console.log(navConts);
    } else {
      setIsMenuOpen(!isMenuOpen);
      navConts.classList.remove();
      navConts.classList.add('hidden');
    }
  }

  return (
    <motion.nav className='text-sm xs:text-sm md:text-md lg:text-xl flex py-2 px-4 bg-[#0d0d0d] fixed top-0 flex w-full justify-between z-10 text-gray-100 uppercase'>
      <ScrollLink to={'home'} smooth={true} className='transition ease-in-out duration-200 cursor-pointer hover:text-[#E0A526]'>
        <h1 className='p-1'>Marc Castro</h1>
      </ScrollLink>
      <button
        id='menuButton'
        onClick={() => handleOpenMenu()}
        className='uppercase absolute right-5 top-3 text-gray-100 z-20'
      >
        {isMenuOpen ? 'Close' : 'Menu'}
      </button>
      <motion.div 
        id='navConts'
        variants={isMobile ? slideDownVariants : {}}
        initial= {isMobile ? (isMenuOpen ? 'visible' : 'hidden') : undefined}
        animate={isMobile ? (isMenuOpen ? 'visible' : 'hidden') : undefined}
      >
        {contents.map((page) => {
          return (
            <ScrollLink 
              onClick={isMobile ? (() => handleOpenMenu()) : undefined} 
              to={page} 
              smooth={true} 
              offset={-40} 
              className='transition ease-in-out duration-200 cursor-pointer hover:text-[#E0A526]'
            >
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
      </motion.div>
    </motion.nav>
  )
}

export default NavBar;