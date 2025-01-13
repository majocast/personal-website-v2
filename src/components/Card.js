import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../helpers/motion-variants';
import lozanoPowerElectric from '../images/projects/lozanopowerelectric.jpg';

export const Card = (params) => {
  const {title, subtext, description, timeline} = params;
  return (
    <>
      <motion.div
        variants={fadeIn}
        initial='initial'
        whileInView='animate'
        viewport={{
          once: true,
        }}
        className='w-full justify-center border-2 rounded-2xl p-2 w-full max-w-md border-transparent shadow-[0_20px_40px_-35px_#E0A526]'
      >
        <img src={lozanoPowerElectric} alt="Lozano Power Electric" className='h-auto w-full rounded-xl sm:rounded-xl md:rounded-xl lg:rounded-xl'/>
        <h1 className='text-2xl text-[#E0A526] my-2'>{subtext}</h1>
        <h2 className='text-lg text-gray-100'>{title}</h2>
        <h3 className='text-md text-gray-100 mb-2'>{timeline}</h3>
        <p  className='text-md text-gray-100'>{description}</p>
      </motion.div>
    </>
  )
}