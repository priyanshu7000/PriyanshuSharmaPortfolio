import React from 'react'
import { Button } from '../ui Components/Button'
const HeroSection: React.FC = () => {
    
    return (

    <div className='flex justify-around items-center px-5 '>
        <div>
            <h1 className='text-5xl font-bold text-white mb-4'>Priyanshu Sharma</h1>
            <h2 className='text-xl font-semibold text-gray-400 mb-4'>Full-Stack Developer</h2>
            <p className='text-lg text-gray-300 mb-6 max-w-xl'>I am a Full-Stack Developer specializing in the MERN stack, with hands-on experience in building scalable, high-performance web applications using JavaScript and TypeScript. I focus on creating clean, maintainable code, optimized APIs, and intuitive user interfaces. Passionate about problem-solving, performance optimization, and delivering reliable end-to-end solutions.</p>
            <Button content="Download Resume" />
        </div>
        <div>
            <img src="/hero.png" alt="" />
        </div>
    </div>
  )
}

export default HeroSection