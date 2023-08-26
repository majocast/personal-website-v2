import React from 'react';
import gradPhoto from '../images/alt-marc-photo.jpg';
import { SiAxios, SiExpress, SiRender, SiNetlify } from 'react-icons/si';
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
} from 'react-icons/bi';
import {
  TbBrandCSharp, TbBrandVscode,
} from 'react-icons/tb';

const About = () => {
  const frontend = [
    {symbol: BiLogoReact, name: 'React'},
    {symbol: BiLogoHtml5, name: 'HTML5'},
    {symbol: BiLogoCss3, name: 'CSS3'},
    {symbol: BiLogoBootstrap, name: 'Bootstrap'},
    {symbol: BiLogoTailwindCss, name: 'Tailwind CSS'},
  ]

  const backend = [
    {symbol: SiAxios, name: 'Axios'},
    {symbol: SiExpress, name: 'Express'},
    {symbol: BiLogoNodejs, name: 'Node.js'},
    {symbol: BiLogoMongodb, name: 'MongoDB'},
    {symbol: BiLogoPostgresql, name: 'Postgresql'},
  ]

  const languages = [
    {symbol: BiLogoJavascript, name: 'JavaScript'},
    {symbol: BiLogoJava, name: 'Java'},
    {symbol: TbBrandCSharp, name: 'C#'},
  ]

  const toolsanddevs = [
    {symbol: BiLogoGithub, name: 'GitHub'},
    {symbol: BiLogoUnity, name: 'Unity'},
    {symbol: TbBrandVscode, name: 'VS Code'},
    {symbol: SiRender, name: 'Render'},
    {symbol: SiNetlify, name: 'Netlify'},
  ]

  return (
    <div id='about' className='text-gray-100 flex flex-col w-9/10 min-h-screen gap-52'>
      <div className='flex w-full items-center gap-4 justify-center'>
        <div className='flex flex-col w-1/2 gap-2'>
          <h1 className='text-[#E0A526] text-4xl uppercase'>About Me</h1>
          <p className='text-xl'>
            I am full stack developer from the state of California and I am excited about
            making beautiful and user-friendly applications. My expertise is rooted in principles
            passed down to me from my college professors, granting me the ability to turn designs
            and documentation into fully functional applications while applying custom designs and
            features into them. My goal is to be able to be able to create versatile applications
            for all, providing a seamless experience for whoever crosses my projects.
            <br/><br/>
            In my down time, I enjoy playing basketball, weight lifting, building lego sets, playing video games,
            spending time with family and friends, going to concerts, and watching 
            <span className='italic'>The Office</span>.
          </p>
          <div className='grid grid-cols-2 grid-rows-2 gap-4 pt-4 text-xl'>
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
        </div>
        <div className='relative flex justify-center rounded-xl border-r-2 border-b-2 border-[#E0A526] w-1/4'>
          <img src={gradPhoto} alt='headshot' className='rounded-xl pr-4 pb-4'/>
        </div>
      </div>
      <div className='flex flex-col w-full items-center justify-center gap-6'>
        <h1 className='text-[#E0A526] text-3xl uppercase'>Technologies I've Used</h1>
        <h1 className='text-[#E0A526] text-3xl uppercase'>Frontend</h1>
        <div className='flex w-9/10 gap-8 items-center'>
          {frontend.map(tech => {
            const FrontIcon = tech.symbol;
            return (
              <div className='text-xl flex flex-col items-center gap-2 transition duration-200 text-gray-100 group hover:text-[#E0A526]'>
                <FrontIcon className='transition duration-200 text-8xl group-hover:text-[#E0A526]' title={tech.name}/>
                <h1 className='transition duration-200 text-[#0d0d0d] group-hover:text-[#E0A526]'>{tech.name}</h1>
              </div>
            )
          })}
        </div>
        <h1 className='text-[#E0A526] text-3xl uppercase'>Backend</h1>
        <div className='flex w-9/10 gap-8 items-center'>
          {backend.map(tech => {
            const BackIcon = tech.symbol;
            return (
              <div className='text-xl flex flex-col items-center gap-2 transition duration-200 text-gray-100 group hover:text-[#E0A526]'>
                <BackIcon className='transition duration-200 text-8xl group-hover:text-[#E0A526]' title={tech.name}/>
                <h1 className='transition duration-200 text-[#0d0d0d] group-hover:text-[#E0A526]'>{tech.name}</h1>
              </div>
            )
          })}
        </div>
        <h1 className='text-[#E0A526] text-3xl uppercase'>Languages</h1>
        <div className='flex w-9/10 gap-8 items-center'>
          {languages.map(tech => {
            const LangIcon = tech.symbol;
            return (
              <div className='text-xl flex flex-col items-center gap-2 transition duration-200 text-gray-100 group hover:text-[#E0A526]'>
                <LangIcon className='transition duration-200 text-8xl group-hover:text-[#E0A526]' title={tech.name}/>
                <h1 className='transition duration-200 text-[#0d0d0d] group-hover:text-[#E0A526]'>{tech.name}</h1>
              </div>
            )
          })}
        </div>
        <h1 className='text-[#E0A526] text-3xl uppercase'>Tools and DevOps</h1>
        <div className='flex w-9/10 gap-8 items-center'>
          {toolsanddevs.map(tech => {
            const ToolsIcon = tech.symbol;
            return (
              <div className='text-xl flex flex-col items-center gap-2 transition duration-200 text-gray-100 group hover:text-[#E0A526]'>
                <ToolsIcon className='transition duration-200 text-8xl group-hover:text-[#E0A526]' title={tech.name}/>
                <h1 className='transition duration-200 text-[#0d0d0d] group-hover:text-[#E0A526]'>{tech.name}</h1>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About;