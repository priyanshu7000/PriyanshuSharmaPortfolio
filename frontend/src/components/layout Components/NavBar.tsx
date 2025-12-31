import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
    
    return (
        <header className='flex justify-between items-center p-6 bg-neutral-800 text-white shadow-md'>
            <Link to="/">logo1</Link>
            <div className='flex gap-6 navLinks'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className='navIcons'>
                <Link to=""><i className="fa-regular fa-moon"></i></Link>
            </div>
        </header>
  )
}
