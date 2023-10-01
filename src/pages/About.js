import React from 'react';
import gradPhoto from '../images/alt-marc-photo.jpg';
import { SiAxios, SiExpress, SiRender, SiPostman } from 'react-icons/si';
import {
  BiLogoMongodb,
  BiLogoReact, 
  BiLogoCss3, 
  BiLogoHtml5, 
  BiLogoJavascript,
  BiLogoJava,
  BiLogoBootstrap,
  BiLogoNodejs,
  BiLogoTailwindCss,
  BiLogoPostgresql,
  BiLogoGithub,
  BiLogoUnity,
  BiLogoGit,
  BiLogoPython,
  BiLogoDjango,
  BiLogoFigma
} from 'react-icons/bi';
import {
  TbBrandCSharp, TbBrandVscode, TbSql
} from 'react-icons/tb';
import { FaSass } from 'react-icons/fa';
import { FiFramer } from 'react-icons/fi';
import { motion } from 'framer-motion';

//fade in animations for boxes containing technologies
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

//slide animations for individual technologies
const slideAnimationVariants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
    }
  }),
}

//isolated slide animations for about description and picture
const isoSlideAnimationVariants = {
  initialRight: {
    opacity: 0,
    x: 20,
  },
  initialLeft: {
    opacity: 0,
    x: -20,
  },
  animateRight: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.25,
    }
  },
  animateLeft: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.25,
    }
  },
}

const About = () => {
  //object array for languages and technologies
  const technologies = [
    [
      {symbol: BiLogoReact, name: 'React'},
      {symbol: BiLogoHtml5, name: 'HTML5'},
      {symbol: BiLogoCss3, name: 'CSS3'},
      {symbol: BiLogoTailwindCss, name: 'Tailwind'},
      {symbol: FaSass, name: 'SASS'},
      {symbol: BiLogoBootstrap, name: 'Bootstrap'},
      {symbol: FiFramer, name: 'Framer'},
    ],

    [
      {symbol: SiExpress, name: 'Express'},
      {symbol: BiLogoNodejs, name: 'Node.js'},
      {symbol: SiAxios, name: 'Axios'},
      {symbol: BiLogoMongodb, name: 'MongoDB'},
      {symbol: BiLogoPostgresql, name: 'PostgreSQL'},
      {symbol: BiLogoDjango, name: 'Django'},
    ],

    [
      {symbol: BiLogoJavascript, name: 'JavaScript'},
      {symbol: BiLogoPython, name: 'Python 3'},
      {symbol: BiLogoJava, name: 'Java'},
      {symbol: TbSql, name: 'SQL'},
      {symbol: TbBrandCSharp, name: 'C#'},
    ],

    [
      {symbol: TbBrandVscode, name: 'VS Code'},
      {symbol: BiLogoGithub, name: 'GitHub'},
      {symbol: BiLogoGit, name: 'Git'},
      {symbol: SiRender, name: 'Render'},
      {symbol: SiPostman, name: 'Postman'},
      {symbol: BiLogoFigma, name: 'Figma'},
      {symbol: BiLogoUnity, name: 'Unity'},
    ],
  ]

  return (
    <div id='about' className='text-gray-100 flex flex-col w-9/10 min-h-screen'>
      <div className='flex flex-col xs:flex-col sm:grid-col md:flex-row lg:flex-row w-full min-h-screen items-center gap-8 justify-center'>
        <motion.div 
          className='flex flex-col w-4/5 xs:w-4/5 md:w-1/2 lg:w-1/2 gap-2'
          variants={isoSlideAnimationVariants}
          initial='initialLeft'
          whileInView='animateLeft'
          viewport={{
            once: true,
          }}
        >
          <h1 className='text-[#E0A526] text-4xl uppercase'>About Me</h1>
          <p className='text-sm xs:text-sm md:text-md lg:text-lg'>
            I am full stack developer from the state of California and I am excited about
            making beautiful, user-friendly, efficient applications. My expertise is rooted in my persistent
            drive to learn new technologies and implement principles passed down by mentors and university professors, 
            granting me the ability to turn mere concepts into fully functional applications utilizing various languages and 
            tech stacks. My goal is to be able to create versatile applications for all who encounter them, making 
            a significant impact in any community I aim to contribute to.
            <br/><br/>
            In my down time, I enjoy playing basketball, weight lifting, building lego sets, playing video games,
            spending time with family and friends, going to concerts, and watching 
            <span className='italic'>The Office</span>.
          </p>
          <div className='text-xs xs:text-xs md:text-md lg:text-lg grid grid-cols-2 grid-rows-2 gap-4 pt-4 text-xl'>
            <section>
              <h1 className='text-[#E0A526] uppercase'>Name</h1>
              <h2>Marc Joseph Guerrero Castro</h2>
            </section>
            <section>
              <h1 className='text-[#E0A526] uppercase'>Education</h1>
              <h2>BS - Computer Science</h2>
              <h2>San Francisco State University</h2>
            </section>
            <section>
              <h1 className='text-[#E0A526] uppercase'>Email</h1>
              <h2>marcjgcastro@gmail.com</h2>
            </section>
            <section>
              <h1 className='text-[#E0A526] uppercase'>Employment</h1>
              <h2>Open</h2>
            </section>
          </div>
        </motion.div>
        <motion.div 
          className='relative flex justify-center rounded-xl border-r-2 border-b-2 border-[#E0A526] w-3/4 xs:w-3/4 sm:w-3/4 md:w-1/4 lg:w-1/4 w-1/4 order-first xs:order-first sm:order-first md:order-last lg:order-last'
          variants={isoSlideAnimationVariants}
          initial='initialRight'
          whileInView='animateRight'
          viewport={{
            once: true,
          }}
        >
          <img src={gradPhoto} alt='headshot' className='rounded-xl mr-8 mb-4'/>
        </motion.div>
      </div>
      <div className='flex flex-col items-center justify-center gap-8'>
        <h1 className='text-[#E0A526] text-4xl uppercase'>Technologies</h1>
        <div className='grid grid-cols-1 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 w-11/12 mx-8'>
          {technologies.map((section, index) => {
            const titles = [
              'frontend', 'backend', 'languages', 'tools and devops'
            ]
            const sectionTitle = titles[index];
            return (
              <motion.div 
                key={index} 
                className='p-2 bg-[#1a1a1a] rounded-xl flex flex-col justify-center text-center gap-4 border-b-2 border-r-2 border-[#E0A526]'
                variants={fadeInAnimationVariants}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <h1 className='uppercase text-xl'>{sectionTitle}</h1>
                <div className='flex justify-center gap-4 mr-2 ml-2'>
                  {section.map((tech, index) => {
                    const TechIcon = tech.symbol;
                    return (
                      <motion.div 
                        className='flex flex-col text-xl transition duration-200 text-gray-100 group hover:text-[#E0A526] justify-between w-full'
                        variants={slideAnimationVariants}
                        initial='initial'
                        whileInView='animate'
                        viewport={{
                          once: true,
                        }}
                        custom={index}
                      >
                        <TechIcon size={50} className='w-full transition duration-200 group-hover:text-[#E0A526]' title={tech.name} />
                        <h1 className='justify-center text-xs xs:text-xs md:text-md lg:text-lg xs:hidden sm:hidden md:hidden lg:flex transition duration-200 text-[#1a1a1a] group-hover:text-[#E0A526]'>{tech.name}</h1>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About;