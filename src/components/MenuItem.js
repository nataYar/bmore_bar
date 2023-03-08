import React from 'react'

const MenuItem = ({ category }) =>  {
  return (
    <div className="items"> 
      <h3 className='item-category font-fancy margin-top-big'>{category.title}</h3>
      <h4 className='price margin-btm-small' >{category.price}</h4>
      <p>{category.addition}</p>
      { category.data.map((el, ind) => (
          <div className='menu-item margin-btm-mid ' key={ind}>
            <h3 className='font-mid margin-btm-small'>{el.item}</h3>
            <p>{el.description}</p>
          </div>
        ))
      } 
    </div>
  )
}

export default MenuItem;
