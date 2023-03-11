import React, { useState } from 'react';
import '../styles/styles.css';
import '../styles/svg.css';
import '../styles/menu.css';
import Spoon from '../images/svg/Spoon';
import Food from './Food';
import Drinks from './Drinks';
import Tomato from '../images/svg/Tomato';
import Leak from '../images/svg/Leak';
import data from './data';

const Menu = () => {
const [optionFood, setOptionFood] = useState(true)

const MenuSubnav = (id) => (
    <ul className="menu-subnav flex-row margin-btm-big">
      <li>
        <a className={optionFood ? "current-option font-big": "option" } 
        onClick={ () => setOptionFood(true)}
        > eat </a>
        </li>
      <li>
        <a  className={!optionFood ? "current-option font-big": "option" } 
        onClick={ () => setOptionFood(false)} 
        > drink</a>
        </li>
    </ul> 
  );


  return (
    <div id='slide-menu' className='slide-menu width-100 padding-slide flex-col-center'>
      <div className="width-100 popup-anim margin-top-mid">
        <h2 className="subheading font-fancy" id="contacts">Menu</h2>
        <div className="spoon margin-auto margin-btm-mid">
          <Spoon color='#dccdac' />
        </div>
      </div>
    <div id="menuStart"></div>
    <Tomato/>
    <Leak />
    <ul className="menu-subnav index-100 flex-row margin-btm-big">
      <li>
        <a className={optionFood ? "current-option pointer index-100 pointer  font-big": "option pointer " } 
        onClick={ () => setOptionFood(true)}
        > eat </a>
        </li>
      <li>
        <a  className={!optionFood ? "current-option index-100 pointer  font-big": " pointer option" } 
        onClick={ () => setOptionFood(false)} 
        > drink</a>
        </li>
    </ul> 
    { optionFood ?  <Food /> : <Drinks /> }
    <ul className="menu-subnav flex-row margin-btm-big">
      <li>
        <a href="#menuStart" className={optionFood ? "current-option index-100 pointer  font-big": "option pointer " } 
        onClick={ () => setOptionFood(true)}
        > eat </a>
        </li>
      <li>
        <a href="#menuStart"  className={!optionFood ? "current-option index-100 pointer font-big": "option pointer " } 
        onClick={ () => setOptionFood(false)} 
        > drink</a>
        </li>
    </ul> 
    <a href="#menuStart" className="back-to-top">Back to Top</a>
    </div>
  )
}

export default Menu;
