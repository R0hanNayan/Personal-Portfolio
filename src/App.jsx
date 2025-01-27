import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components';
import { AnimatedBackground } from 'animated-backgrounds';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="realtive z-0">
          <Contact />
          <AnimatedBackground
            animationName="starryNight"
            style={{ backgroundColor: 'rgb(0, 0, 0)' }}
          />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
