import React from 'react';
import '../styles/styles.css';

const Menuitems = ({ categories }) => {
  return (
    <>
    { categories
    .sort((a, b) => a.name.localeCompare(b.name)) // Sort categories alphabetically by name
    .map((category) => (
        <div 
        className="items"
        key={category.id} 
        id={category.id}>
          
          <h3 className='item-category font-fancy margin-top-big'>{category.name}</h3>
            <h4 className='price margin-btm-mid' >{category.price}</h4>
            <p className='text-center margin-btm-mid'>{category.note}</p>
            { category.items.map((el, ind) => (
              <div className='menu-item margin-btm-mid' key={ind} >
                <h3 className='font-mid margin-btm-small'>{el.name}</h3>
                <p>{el.description}</p>
              </div>
              ))
            }
        </div>
      ))
    }
    </>
  )
}
export default Menuitems;