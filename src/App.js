import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './pages/About';
import Resume from './components/Resume';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
//import { Experience } from './pages/Experience';


function App() {
  
  return (
    <>
      <Router>
        <NavBar className='flex flex-shrink-0 max-w-[1920px]' />
        <div className='flex-grow flex flex-col items-center justify-center max-w-[1920px]'>
          <Home className='hidden'/>
          <About className='hidden'/>
          {/*<Experience className='hidden'/>*/}
          <Projects className='hidden'/>
          <Resume className='hidden'/>
          <Contact className='hidden'/>
        </div>
      </Router>
    </>
  );
}

export default App;
