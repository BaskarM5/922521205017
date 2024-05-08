import React from 'react'
import card from './product_data'

const MainContent = () => {
  console.log(card);
  const list = card.map((item)=>
  <div className='card' key={item.id}>
    <div className='detail'>
      <h2> {item.product_name}</h2>
      <p>{item.description}</p>
      <p className='price'>{item.price}<span>{item.currency}</span></p>
      <div className='btn'>Add TO Cart</div>
    </div>

  </div>
  );
  return(
    <div className='main'>
      <h3>HEADPHONES</h3>
      {list}
    </div>
  )
} 

export default MainContent ;
