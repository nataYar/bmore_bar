import React from 'react';
import '../styles/styles.css';
import {Pizza}  from './data';
import MenuItem from './MenuItem';

export default function Food() {
  return (
    <>
    <MenuItem category={Pizza}/>
     </>
   
  )
}
