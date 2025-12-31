import { BrowserRouter } from 'react-router-dom'
import {About, Header, Team, Hero, PlayButton, Acknowledgement, Footer, AboutLogos} from './components'
import React, { useState, useEffect } from 'react';

export default function App() {
    const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // mobile threshold
    };

    checkMobile(); // initial check
    window.addEventListener('resize', checkMobile); // update on resize

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!isMobile) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">📱 Mobile Only</h1>
        <p className="text-lg">
          Sorry! This site is designed to be viewed on a mobile device.
        </p>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <div className='relative max-h-full max-w-full'>
        <div >
          <div id='hero'>
            <Hero/>
          </div>
          <Header/>
        </div>
        
        <div id='about'>
          <About/>
        </div>
        <AboutLogos/>
        <PlayButton/>

        <div id='team'>
          <Team/>
        </div>

        <div id='acknowledgement'>
          <Acknowledgement/>
        </div>

        <div id='contactUs'>
          <Footer/>
        </div>
      </div>  
    </BrowserRouter>
  )
}
