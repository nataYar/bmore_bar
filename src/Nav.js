import React from 'react';
import './Styles/styles.css'
import './Styles/nav.css';

const navContext = React.createContext(undefined);

const Nav = ({ toggleNavCallback, navClicked }) => {

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

            {/* <div className={ navClicked  ? 'blob' : 'blob blob-hidden' } ></div> */}
        <div className='blob' ></div>
        <ul className='nav-wrapper flex-col-center'>
        {/* <ul className={ navClicked  ? 'nav-wrapper flex-col-center active' : 'nav-wrapper' } > */}
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
            <li onClick={ toggleNavCallback }>
                <a href="#about" className='nav-item nav-footer'>
                    about
                </a>
            </li>
            <li onClick={ toggleNavCallback }>
                <a href="#menu" className='nav-item nav-footer'>
                    Menu
                </a>
            </li>
            <li onClick={ toggleNavCallback }>
                <a href="#contact_us" className='nav-item nav-footer'>
                    contact us
                </a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav;