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

        <div className={ navClicked  ? 'blob' : 'blob blob-hidden' } ></div>
        <ul className={ navClicked  ? 'nav-wrapper flex-col-center active' : 'nav-wrapper' } >
                <li onClick={ toggleNavCallback }>
                    <a href="#section-about" className='nav-item nav-about'>
                        Contacts
                    </a>
                    </li>
                <li onClick={ toggleNavCallback }>
                    <a href="#section-projects" className='nav-item nav-projects'>
                        About
                    </a>
                    </li>
                <li onClick={ toggleNavCallback }>
                    <a href="#section-footer" className='nav-item nav-footer'>
                        Menu
                    </a>
                </li>
            </ul>
    </nav>
  )
}

export default Nav;