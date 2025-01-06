//component that handles the emailing mechanics for contact section

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { fadeInLeft } from '../helpers/motion-variants';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    //emailjs sendform function that handles the emailing mechanics
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  };

  return (
    <div id='contact' className='flex flex-col items-center justify-center text-gray-100 pb-16 w-4/5 xs:w-4/5 md:w-4/5 lg:w-2/5'>
      <h1 className='uppercase text-4xl text-[#E0A526]'>Contact</h1>
      <motion.form 
        ref={form} 
        onSubmit={sendEmail} 
        className='flex flex-col p-16 border-b-2 border-r-2 rounded-xl border-[#E0A526] w-9/10 xs:w-9/10 md:w-full lg:w-full'
        variants={fadeInLeft}
        initial='initial'
        whileInView='animate'
        viewport={{
          once: true,
        }}
      >
        <label className='text-gray-100'>Name:</label>
        <input className='text-gray-100 mb-4 bg-[#0d0d0d] border-2 rounded-xl border-[#E0A526] border-2 p-1' type="text" name="user_name" />
        <label className='text-gray-100'>Email:</label>
        <input className='text-gray-100 mb-4 bg-[#0d0d0d] border-2 rounded-xl border-[#E0A526] border-2 p-1' type="email" name="user_email" />
        <label className='text-gray-100'>Message:</label>
        <textarea className='text-gray-100 mb-4 bg-[#0d0d0d] border-2 rounded-xl border-[#E0A526] border-2 p-1' name="message" />
        <input className='text-center gap-1 transition ease-in-out duration-200 uppercase text-xl rounded-lg p-2 hover:bg-[#E0A526] hover:text-[#0d0d0d] border-2 border-[#E0A526] bg-[#0d0d0d] text-gray-100' type="submit" value="Send" />
      </motion.form>
    </div>
  )
}

export default Contact;