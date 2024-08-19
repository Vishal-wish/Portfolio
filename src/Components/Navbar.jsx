import React from 'react';
import { Link } from 'react-scroll';
import Image from '../assets/Images/logo.svg';
import Resume from '../assets/Images/Resume.pdf';

const Navbar = () => {
  return (
    <div className='Home'>
      <nav className='navbar p-0 w-100'>
        <div className="container-fluid navbar-expand-md bg-dark">
            <img src={Image} alt="Logo"  className='className="navbar-brand ps-3">'/>
          <div className="navbar-toggler text-light" data-bs-toggle='collapse' data-bs-target='#navcontent'>
            =
          </div>
          <div className="collapse navbar-collapse" id='navcontent'>
            <div className="navbar-nav ms-auto align-content-center p-2">
              <ul className='navbar-nav'>
                <li className="nav-item navhov">
                  <Link to="About" smooth={true} duration={100}  className='nav-link active text-light text-center px-3'>About me</Link>
                </li>
                <li className="nav-item navhov">
                  <Link to="Skills" smooth={true} duration={100} className='nav-link active text-light text-center px-3'>Skills</Link>
                </li>
                <li className="nav-item navhov">
                  <Link to="Projects" smooth={true} duration={100} className='nav-link active text-light text-center px-3'>Projects</Link>
                </li>
                <li className="nav-item navhov">
                  <Link to="Education" smooth={true} duration={100} className='nav-link active text-light text-center px-3'>Education</Link>
                </li>
                <li className="nav-item navhov">
                  <Link to="Contact" smooth={true} duration={100} className='nav-link active text-light text-center px-4'>Contact Me</Link>
                </li>
                <li className="nav-item">
                  <a href={Resume} download="Resume.pdf" target="_blank" rel="noopener noreferrer" className='nav-link text-dark fw-bold rounded-pill px-3 mx-auto bg-light' style={{ width: "max-content" }}>Resume ↓</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
