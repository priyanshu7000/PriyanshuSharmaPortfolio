import React from 'react'
import { NavBar } from '../components/layout Components/NavBar';
import HeroSection from '../components/layout Components/HeroSection';
import Technologies from '../components/layout Components/Technologies';
import { Contact } from '../components/layout Components/Contact';
import Project from '../components/layout Components/Project';
import { About } from '../components/layout Components/About';
import { Resume } from '../components/layout Components/Resume';

const Home:React.FC = () => {
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <Technologies/>
        <Project/>
        <About/>
        <Resume/>
        <Contact/>
    </div>
  )
}

export default Home