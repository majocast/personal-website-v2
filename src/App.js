import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './pages/About';
import Resume from './pages/Resume';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';


function App() {
  
  return (
    <>
      <Router>
        <NavBar className='flex flex-shrink-0' />
          <div className='flex-grow flex flex-col items-center justify-center'>
            <Home className='hidden'/>
            <About className='hidden'/>
            <Projects className='hidden'/>
            <Resume className='hidden'/>
            <Contact className='hidden'/>
          </div>
      </Router>
    </>
  );
}

export default App;
