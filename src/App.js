import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import About from './pages/About';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
      <Router>
        <NavBar className='flex flex-shrink-0' />
          <div className='flex-grow flex flex-col items-center justify-center'>
            <Home />
            <About />
            <Experience />
            <Projects />
          </div>
      </Router>
    </>
  );
}

export default App;
