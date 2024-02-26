import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { fadeInUp } from '../helpers/motion-variants';


const Experience = () => {
  console.log(fadeInUp);
  return (
    <motion.div 
      id='experience' 
      className='flex justify-between w-4/5'
      variants={fadeInUp}
      initial='initial'
      whileInView='inView'
    >
      <Card />
      <Card />
      <Card />
      <Card />
    </motion.div>
  )
}

export default Experience;