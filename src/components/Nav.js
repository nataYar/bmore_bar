import React from 'react';
import '../styles/styles.css';
import '../styles/nav.css';
import Knife from '../images/svg/Knife';
import Scoop from '../images/svg/Scoop';

const Nav = ({ windowWidth, toggleNavCallback, navClicked }) => {

  return (
    <nav>
        <a href='#'><div className="logo"></div></a>
        <div className={ navClicked ? 'nav-icon open' : 'nav-icon'}
            onClick={() => toggleNavCallback()}>
            <span ></span>
            <span ></span>
            <span ></span>
            
            <span ></span>
            <span ></span>
            <span ></span>

            <span ></span>
            <span ></span>
            <span ></span>
            </div>

        <div className='blob' ></div>
        <ul className='nav-wrapper flex-col-center'>
            <li onClick={ toggleNavCallback }>
                <a href="#contacts" className='nav-item nav-footer'>
                    contacts
                </a>
                </li>
            <li onClick={ toggleNavCallback }>
                <a href="#location" className='nav-item nav-about'>
                    location
                </a>
                </li>
            <li onClick={ toggleNavCallback }>
                <a href="#hours" className='nav-item nav-projects'>
                    hours
                </a>
                </li>
            <li className="flex-col-center" onClick={ toggleNavCallback }>
                <a href="#menu" className='nav-item nav-footer'>
                    menu
                </a>
                <div className='knife-container'>
                   <Knife />
                   </div>
            </li>
            <li onClick={ toggleNavCallback }>
                <a href="#events" className='nav-item nav-footer'>
                    events
                </a>
            </li>
            <li onClick={ toggleNavCallback }>
                <a href="#gallery" className='nav-item nav-footer'>
                    gallery
                </a>
            </li>
            <li onClick={ toggleNavCallback }>
                <a href="#about" className='nav-item nav-footer'>
                    about
                </a>
            </li>
        </ul>

    </nav>
  )
}

export default Nav;