import React from 'react';
import '../styles/styles.css'

const MenuItem = ({ category }) =>  {
  return (
    <div className="items"> 
      <h3 className='item-category font-fancy margin-top-big'>{category.title}</h3>
      <h4 className='price margin-btm-mid' >{category.price}</h4>
      <p className='text-center'>{category.addition}</p>
      { category.data.map((el, ind) => (
          <div className='menu-item margin-btm-mid' key={ind}>
            <h3 className='font-mid margin-btm-small'>{el.item}</h3>
            <p>{el.description}</p>
          </div>
        ))
      } 
    </div>
  )
}

export default MenuItem;
