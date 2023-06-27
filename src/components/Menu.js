import React from 'react';
import '../styles/styles.css';
import '../styles/svg.css';
import '../styles/menu.css';
import Spoon from '../images/svg/Spoon';
import MenuCategory from './MenuCategory';
// import Tomato from '../images/svg/Tomato';
// import Leak from '../images/svg/Leak';

import imgDrinks from '../images/interier/coffee.webp';
import foodImg from '../images/interier/food.webp';

const Menu = ({  foodOptionCallback, optionFood, food, drinks }) => {
  return (
    <div id='menu' className='slide-menu width-100 padding-slide flex-col-center'>
      <div className="width-100 popup-anim margin-top-mid margin-btm-mid">
        <h2 className="subheading font-fancy" id="contacts">Menu</h2>
        <div className="spoon margin-auto margin-btm-mid">
          <Spoon color='#b59a7c' />
        </div>
      </div>
    <div id="menuStart"></div>
   
    <ul className="menu-subnav index-100 flex-row margin-btm-big">
      <li>
        <a className={optionFood ? "current-option pointer index-100 pointer  font-big": "option pointer " } 
        onClick={ () => foodOptionCallback(true)}
        > eat </a>
        </li>
      <li>
        <a  className={!optionFood ? "current-option index-100 pointer  font-big": " pointer option" } 
        onClick={ () => foodOptionCallback(false)} 
        > drink</a>
        </li>
    </ul> 
    
    { optionFood ?  
    <div className="menu-container">
      <div className="menu-pic radius-small">
        <img src={foodImg} alt="" />
      </div>
      <MenuCategory categories={food} />
    </div> 
     : 
     <div className="menu-container">
      <div className="menu-pic radius-small">
        <img src={imgDrinks} alt="" />
      </div>
      <MenuCategory categories={drinks} />
    </div> 
    }
    <ul className="menu-subnav flex-row margin-btm-big">
      <li>
        <a href="#menuStart" className={optionFood ? "current-option index-100 pointer  font-big": "option pointer " } 
        onClick={ () => foodOptionCallback(true)}
        > eat </a>
        </li>
      <li>
        <a href="#menuStart"  className={!optionFood ? "current-option index-100 pointer font-big": "option pointer " } 
        onClick={ () => foodOptionCallback(false)} 
        > drink</a>
        </li>
    </ul> 
    <a href="#menuStart" className="back-to-top">Back to Top</a>
    </div>
  )
}

export default Menu;
