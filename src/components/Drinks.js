import React from 'react';
import '../styles/styles.css';
import MenuItem from './MenuItem';
import { CongelatoDaiquiriMenu, MimosaMenu, Lattini, Drafts, ClassicCocktails, 
  Awaken, OJDetoxImmuneBooster, ProteinShakes } from './data'

export default function Drinks() {
  return (
      <>
        <MenuItem category={CongelatoDaiquiriMenu}/>
        <MenuItem category={Lattini}/>
        <MenuItem category={Drafts}/>
        <MenuItem category={ClassicCocktails}/>
        <MenuItem category={Awaken}/>
        <MenuItem category={OJDetoxImmuneBooster}/>
        <MenuItem category={ProteinShakes}/>
    </>
  )
}
