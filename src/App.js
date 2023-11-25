import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { useTheme } from './ThemeContext';
import Splash from './components/Splash';
import Footer from './components/Footer';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className='App'>
      <Navbar />
      <Splash />
      <Footer />

    </div>
  );
}

export default App;
