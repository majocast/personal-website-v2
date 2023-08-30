import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const NavBar = () => {
  const contents = ['about', 'portfolio', 'resume', 'contact'];
  
  useEffect(() => {
    if(window.innerWidth >= 768) {
      document.getElementById('navConts').classList.add('flex');
      document.getElementById('navConts').classList.add('space-x-4');
      document.getElementById('menuButton').classList.add('hidden');

    } else {
      document.getElementById('navConts').classList.add('hidden');
      document.getElementById('menuButton').classList.add('flex');
    }
  }, [])

  const handleOpenMenu = () => {
    console.log('opening menu');
  }

  return (
    <motion.nav className='text-sm xs:text-sm md:text-md lg:text-xl flex py-2 px-4 bg-[#0d0d0d] fixed top-0 flex w-full justify-between z-10 text-gray-100 uppercase'>
      <ScrollLink to={'home'} smooth={true} className='transition ease-in-out duration-200 cursor-pointer hover:text-[#E0A526]'>
        <h1 className='p-1'>Marc Castro</h1>
      </ScrollLink>
      <button
        id='menuButton'
        onClick={() => handleOpenMenu()}
        className='uppercase absolute right-5 top-3 text-gray-100'
      >
        Menu
      </button>
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