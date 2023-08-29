import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  const contents = ['about', 'portfolio', 'resume', 'contact'];

  return (
    <nav className='flex py-2 px-4 bg-[#0d0d0d] fixed top-0 flex w-full justify-between z-10 text-gray-100 text-2xl uppercase'>
      <ScrollLink to={'home'} smooth={true} className='transition ease-in-out duration-200 cursor-pointer hover:text-[#E0A526]'>
        <h1 className='p-1'>Marc Castro</h1>
      </ScrollLink>
      <div className='flex space-x-4'>
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
    </nav>
  )
}

export default NavBar;