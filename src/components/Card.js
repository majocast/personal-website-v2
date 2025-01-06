import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../helpers/motion-variants';

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
        className='w-full justify-center gap-2'
      >
        <h1>{subtext}</h1>
        <h2>{title}</h2>
        <h3>{timeline}</h3>
        <p>{description}</p>
      </motion.div>
    </>
  )
}