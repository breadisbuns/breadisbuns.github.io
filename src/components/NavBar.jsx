import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';
import { SiNpm } from 'react-icons/si';
import anpanLogo from '../../assets/anpan-logo.png';

// Navbar container with linked routes
const NavBar = () => {
  return (
    <nav className='NavBar-Container'>
      <nav className='NavBar'>
        <div className='Nav-title'>
          <img src={anpanLogo} className='Anpan-Logo' />
          <h3>anpan</h3>
        </div>

        <ul className='nav-links'>
          <li className='nonsocials'>
            <Link to='/' className='home'>
              Home
            </Link>
          </li>
          <li className='nonsocials'>
            <button className='schema-btn'>
              <Link to='/CodeGenerator' className='generate_schema'>
                Generate Schema
              </Link>
            </button>
          </li>
          <li className='socials'>
            <a href='https://github.com/oslabs-beta/anpan'>
              <AiOutlineGithub className='Nav-Github' />
            </a>
          </li>
          <li className='socials'>
            <a href='https://www.npmjs.com/package/@breadisbuns/anpan'>
              <SiNpm className='Nav-Npm' />
            </a>
          </li>
        </ul>
      </nav>
    </nav>
  );
};

export default NavBar;
