import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { fadeInUp } from '../helpers/motion-variants';

//currently working on this as of January 3rd, 2025
export const Experience = () => {
  return (
    <motion.div 
      className='w-auto flex'
      variants={fadeInUp}
      initial='initial'
      whileInView='animate'
      viewport={{
        once: true,
      }}
    >
      <div id='timeline' className='w-1/4'>
        timeline space
      </div>
      <div id='experiences' className='w-3/4 flex flex-col'>
        <Card title="Software Engineer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." subtext="The Walt Disney Company" timeline="August 2024 - Present"/>
      </div>
    </motion.div>
  )
}