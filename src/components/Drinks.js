import React from 'react';
import '../styles/styles.css';
import imgDrinks from '../images/interier/coffee.jpeg';
import MenuItem from './MenuItem';
import { CongelatoDaiquiriMenu, MimosaMenu, Lattini, Drafts, ClassicCocktails, 
  Awaken, OJDetoxImmuneBooster, ProteinShakes } from './data'

export default function Drinks() {
  return (
      <div className="menu-container " >
        <div className="menu-pic radius-small">
          <img src={imgDrinks} alt="" />
        </div>
        <MenuItem category={CongelatoDaiquiriMenu}/>
        <MenuItem category={Lattini}/>
        <MenuItem category={Drafts}/>
        <MenuItem category={ClassicCocktails}/>
        <MenuItem category={Awaken}/>
        <MenuItem category={OJDetoxImmuneBooster}/>
        <MenuItem category={ProteinShakes}/>
    </div>
  )
}
