import React from 'react';
import resumePDF from '../images/Castro_Marc_Resume2025.pdf';
import { BiDownload } from 'react-icons/bi';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeInLeft } from '../helpers/motion-variants';

const Resume = () => {
  return (
    <div id='resume' className='h-96 flex flex-col align-center items-center justify-center text-center gap-4 w-4/5 xs:w-4/5 md:w-full lg:w-full'>
      <h1 className='uppercase text-4xl text-[#E0A526]'>Resume</h1>
      <motion.div 
        className='text-sm xs:text-sm md:text-md lg:text-lg rounded-xl flex text-white gap-2 p-4 border-b-2 border-r-2 border-[#E0A526]'
        variants={fadeInLeft}
        initial='initial'
        whileInView='animate'
        viewport={{
          once: true,
        }}
      >
        <a 
          className='flex items-center gap-1 transition ease-in-out duration-200 uppercase rounded-lg p-2 hover:bg-[#E0A526] hover:text-[#0d0d0d] border-2 border-[#E0A526] bg-[#0d0d0d] text-gray-100' 
          href={resumePDF} 
          target='_blank' 
          rel='noreferrer noopener'
        >
          Open Resume
          <BsBoxArrowUpRight />
        </a>
        <a 
          className='flex items-center gap-1 transition ease-in-out duration-200 uppercase rounded-lg p-2 hover:bg-[#E0A526] hover:text-[#0d0d0d] border-2 border-[#E0A526] bg-[#0d0d0d] text-gray-100' 
          href={resumePDF} 
          download
        >
          Download Resume
          <BiDownload />
        </a>
      </motion.div>
    </div>
  )
}

export default Resume;