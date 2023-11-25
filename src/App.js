import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Footer from './components/Footer';
import About from './components/About';
import Astro from './components/Astro';
import Projects from './components/Projects';
import { useTheme } from './ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Splash />} />
          <Route path='/projects' element ={<Projects />} />
          <Route path='/astro' element={<Astro />} />
          <Route path='/about' element={<About />} />
        </Routes>  
        <Footer />  
        </div>        

    </Router>
  );
}

export default App;
