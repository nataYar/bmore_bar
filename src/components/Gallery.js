import React from 'react';

export const Gallery = ({ pictures }) => {
  return (
    <>
    <div className="g-line line-1 font-fancy-2">Cocktails</div>
    <div className="g-line line-2 font-fancy-2">Coffee</div> 
    <div className="g-line line-3 font-fancy-2">Pizza & Bagels</div> 
      {
        pictures.map((image, ind) => (
        <div 
            className=" g-pic font-big font-fancy"
            key={ind}>
            <img className='popup-anim' src={image}  />
        </div>
        ))
      }    
    </>
  )
}