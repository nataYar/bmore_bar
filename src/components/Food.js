import React from 'react';
import '../styles/styles.css';
import foodImg from '../images/interier/food.jpeg';
import {Pizza}  from './data';
import MenuItem from './MenuItem';

export default function Food() {
  return (
    <div className="menu-container">
      <div className="menu-pic radius-small">
        <img src={foodImg} alt="" />
      </div>
        <MenuItem category={Pizza}/>
    </div>
  )
}
