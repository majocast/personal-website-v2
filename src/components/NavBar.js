import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const NavBar = () => {
  const contents = ['home', 'about', 'experience', 'projects'];


  return (
    <nav className='flex p-2 bg-[#0d0d0d] fixed top-0 flex w-full justify-between z-10 text-gray-100 text-2xl uppercase'>
      <h1 className='p-1'>Marc Castro</h1>
      <div className='flex space-x-4'>
        {contents.map((page) => {
          return (
            <ScrollLink to={page} smooth={true} offset={-75} className='border-solid border-b-2 border-[#E0A526] rounded-lg transition ease-in-out duration-200 cursor-pointer hover:bg-[#E0A526] hover:text-[#0d0d0d] p-1'>
              <h1 className='p-1'>{page}</h1>
            </ScrollLink>
          );
        })}
      </div>
    </nav>
  )
}

export default NavBar;