import React from 'react';
import myPortfolio from '../images/projects/myportfolio.jpg';
import onTheGrind from '../images/projects/onthegrind.jpg';
import semiWrapped from '../images/projects/semiwrapped.jpg';
import eventFinder from '../images/projects/eventfinder.jpg';
import crisisConnect from '../images/projects/crisisconnect.jpg';
import { SiAxios, SiExpress, SiReactquery } from 'react-icons/si';
import { FaSass } from 'react-icons/fa';
import {
  BiLogoMongodb,
  BiLogoReact, 
  BiLogoCss3, 
  BiLogoHtml5, 
  BiLogoJavascript,
  BiLogoBootstrap,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoSpotify,
  BiLogoAws,
  BiLogoDocker,
  BiLogoPostgresql,
} from 'react-icons/bi';
import { motion } from 'framer-motion';

//animation variants for sliding in projects on scroll
const slideAnimationVariants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.25,
    }
  },
}

const Projects = () => {
  //projects object array that contains all the projects for display
  const projects = [
    {
      img: myPortfolio, 
      href: 'https://marccastro.onrender.com', 
      github: 'https://github.com/majocast/personal-website-v2', 
      techs: [BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoTailwindCss], 
      name: 'marccastro.onrender.com', 
      desc: 'A solo-developed, fully responsive personal portfolio to showcase my identity, accomplishments, and selected projects. Process included sketches, rough drafting, quality assurance and user central design review via having colleagues, recruiters and advisors navigate the website.'
    },
    {
      img: eventFinder, 
      href: 'https://edmeventfinder.onrender.com/', 
      github: 'https://github.com/majocast/EDM-Event-Finder', 
      techs: [BiLogoReact, BiLogoJavascript, BiLogoHtml5, FaSass, BiLogoNodejs, BiLogoPostgresql, SiAxios, SiExpress, BiLogoDocker, BiLogoBootstrap, SiReactquery], 
      name: 'Event Finder',
      desc: 'A fully responsive, event scraper application that allows users view the next EDM events in California. Furthermore, users can create an account and save the upcoming events that they wish to attend, providing a more personalized experience when finding and tracking your anticipated events.'
    },
    {
      img: onTheGrind, 
      href: 'https://onthegrind.onrender.com', 
      github: 'https://github.com/majocast/OnTheGrind-React', 
      techs: [BiLogoMongodb, SiExpress, BiLogoReact, BiLogoNodejs, BiLogoJavascript, SiAxios, BiLogoHtml5, BiLogoTailwindCss], 
      name: 'On The Grind', 
      desc: 'An e-commerce website that allows users to view the products that the company known as "On The Grind" have to offer! Users can navigate the page, sign in or create an account, add items to their cart, place an order, and so much more.'
    },
    {
      img: semiWrapped, 
      href: 'https://statsapp-9vd0.onrender.com', 
      github: 'https://github.com/majocast/spotify-api-v2', 
      techs: [BiLogoReact, SiExpress, SiAxios, BiLogoHtml5, BiLogoCss3, BiLogoBootstrap, BiLogoSpotify, BiLogoJavascript ], 
      name: 'Spotify Stats App', 
      desc: 'A web application made using the Spotify API that allows users to log in with their spotify premium account and look through the past 6 months of data in a concise and sorted manner. Users shall be able to see their genre pool and top artists and songs. It is currently awaiting quota extension from Spotify.'
    },
    {
      img: crisisConnect, 
      github: 'https://github.com/CSC-648-SFSU/csc648-02-sp2023-team04', 
      techs: [BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoAws], 
      name: 'Crisis Connect', 
      desc: 'An industry-grade, Beta-level launch of a crisis alert web application that shall allow users to see Weather & Fire, Health, and Security updates uploaded directly by county officials in California. You can view and filter the map for updates, register/login to access capabilities to recieve personalized updates, and more.'
    },
  ]

  return (
    <div id='portfolio' className='min-h-screen flex flex-col items-center justify-center mt-16'>
      <h1 className='uppercase text-[#E0A526] text-4xl py-8'>Portfolio</h1>
      {projects.map((project, index) => {
        const projectImg = project.img;
        console.log(project.github);
        return (
          <motion.div 
            variants={slideAnimationVariants}
            initial='initial'
            whileInView='animate'
            viewport={{
              once: true,
            }}
            custom={index}
            className='grid grid-rows-auto grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-5/6 text-center pb-2 pr-2 my-2 rounded-xl border-b-2 border-r-2 border-[#E0A526]'
          >
            <div className='flex xs:rounded-t-xl sm:rounded-t-xl md:rounded-l-xl max-h-full'>
              <img src={projectImg} alt={project.name} className='h-full'/>
            </div>
            <div className='gap-0 lg:gap-2 xl:gap-4 flex flex-col justify-center items-center bg-[#1a1a1a] rounded-b-xl sm:rounded-b-xl md:rounded-b-xl lg:rounded-r-xl'>
              <h1 className='text-xl sm:text-xl md:text-2xl lg:text-3xl text-[#E0A526]'>{project.name}</h1>
              <div className='flex w-full justify-center text-gray-100 gap-2'>
                {project.techs.map(tech => {
                  const TechIcon = tech;
                  return (
                    <TechIcon size={50} />
                  )
                })}
              </div>
              <p className='text-xs xs:text-xs md:text-md lg:text-lg text-gray-100 w-4/5'>{project.desc}</p>
              <div className='flex gap-4'>
                {project.href ? <a className='uppercase text-gray-100 border-solid border-b-2 border-[#E0A526] rounded-lg transition ease-in-out duration-200 cursor-pointer hover:bg-[#E0A526] hover:text-[#0d0d0d] p-1' href={project.href} target='_blank' rel='noopener noreferrer'>demo</a> : null}
                {project.github ? <a className='uppercase text-gray-100 border-solid border-b-2 border-[#E0A526] rounded-lg transition ease-in-out duration-200 cursor-pointer hover:bg-[#E0A526] hover:text-[#0d0d0d] p-1' href={project.github} target='_blank' rel='noopener noreferrer'>github</a> : null}
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default Projects;