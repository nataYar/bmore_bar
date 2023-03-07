import React, { useState, useLayoutEffect } from 'react'
import '../../styles/styles.css';
import './menu.css';
import Spoon from '../../images/svg/Spoon';
import Food from '../Food'
import Drinks from '../Drinks';
import data from '../data';

const Menu = () => {
const [optionFood, setOptionFood] = useState(true)

const MenuSubnav = () => (
    <ul className="menu-subnav flex-row">
      <li>
        <a href="#menuStart" className={optionFood ? "current-option font-big": "option" } 
        onClick={ () => setOptionFood(true)}
        > eat</a>
        </li>
      <li>
        <a href="#menuStart" className={!optionFood ? "current-option font-big": "option" } 
        onClick={ () => setOptionFood(false)} 
        > drink</a>
        </li>
    </ul> 
  );


  return (
    <div id='slide-menu' className='slide-menu padding-slide flex-col-center'>
      <div className="width-100 popup-anim">
        <h3 className="subheading font-fancy" id="contacts">Menu</h3>
        <div className="spoon margin-auto margin-btm-big">
          <Spoon color='#dccdac' />
        </div>
      </div>
    <MenuSubnav />
    <div id="menuStart"></div>
    { optionFood ?  <Food /> : <Drinks /> }
    <MenuSubnav />
    <a href="#menuStart" className="back-to-top">Back to Top</a>
    </div>
  )
}

export default Menu;
