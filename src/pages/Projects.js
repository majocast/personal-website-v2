import React from 'react';
import myPortfolio from '../images/projects/myportfolio.jpg';
import onTheGrind from '../images/projects/onthegrind.jpg';
import semiWrapped from '../images/projects/semiwrapped.jpg';
import weatherApp from '../images/projects/weatherapp.jpg';
import crisisConnect from '../images/projects/crisisconnect.jpg';
import { SiAxios, SiExpress, SiRender } from 'react-icons/si';
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
} from 'react-icons/bi';

const Projects = () => {
  const techs = [
    {symbol: BiLogoMongodb, name: 'MongoDB'},
    {symbol: SiExpress, name: 'Express'},
    {symbol: BiLogoReact, name: 'React'},
    {symbol: BiLogoNodejs, name: 'Node.js'},
    {symbol: BiLogoHtml5, name: 'HTML5'},
    {symbol: BiLogoCss3, name: 'CSS3'},
    {symbol: BiLogoJavascript, name: 'JavaScript'},
    {symbol: BiLogoBootstrap, name: 'Bootstrap'},
    {symbol: BiLogoTailwindCss, name: 'Tailwind CSS'},
    {symbol: SiAxios, name: 'Axios'},
    {symbol: SiRender, name: 'Render'},
  ];

  const projects = [
    {img: myPortfolio, techs: [BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoTailwindCss], name: 'marccastro.onrender.com', desc: 'A solo-developed personal portfolio to showcase my identity, accomplishments, and selected projects. Process included sketches, rough drafting, quality assurance and user central design review via having colleagues, recruiters and advisors navigate the website.'},
    {img: onTheGrind, techs: [BiLogoMongodb, SiExpress, BiLogoReact, BiLogoNodejs, BiLogoJavascript, SiAxios, BiLogoHtml5, BiLogoTailwindCss], name: 'On The Grind', desc: 'A full stack e-commerce website that allows users to view the products that the company known as "On The Grind" have to offer! Users can navigate the page, sign in or create an account, add items to their cart, place an order, and so much more.'},
    {img: semiWrapped, techs: [BiLogoReact, SiExpress, SiAxios, BiLogoHtml5, BiLogoCss3, BiLogoBootstrap, BiLogoSpotify, BiLogoJavascript ], name: 'Semi Wrapped', desc: 'A web application made using the Spotify API that allows users to log in with their spotify premium account and look through the past 6 months of data in a concise and sorted manner. Users shall be able to see their genre pool and top artists and songs. It is currently awaiting quota extension from Spotify.'},
    {img: crisisConnect, techs: [BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoAws], name: 'Crisis Connect', desc: 'An industry-grade, Beta-level launch of a crisis alert web application that shall allow you to see Weather & Fire, Health, and Security updates uploaded directly by county officials. You can view and filter the map for updates across California, register/login to access capabilities to recieve personalized updates, and more.'},
    {img: weatherApp, techs: [BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoJavascript, SiAxios], name: 'Weather App', desc: 'A little weather app that allows for city search using the openweathermap.org Weather API. Website displays the current temperature, the cloud coverage, any weather like thunderstorms or rain, humidity, and wind speed. It also displays the resulting city from the search.'},
  ]
  return (
    <div id='projects' className='min-h-screen flex flex-col items-center'>
      <h1 className='uppercase text-[#E0A526] text-4xl py-8'>Projects</h1>
      {projects.map(project => {
        const projectImg = project.img;
        return (
          <a className='grid grid-cols-2 w-4/5 text-center pb-2 pr-2 my-2 rounded-xl border-b-2 border-r-2 border-[#E0A526]' href='https://github.com/majocast/personal-website' target='_blank' rel='noopener noreferrer'>
            <img src={projectImg} alt={project.name} className='rounded-l-xl'/>
            <div className='flex flex-col justify-center items-center bg-[#1a1a1a] rounded-r-xl gap-4'>
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
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default Projects;