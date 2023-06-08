import React from 'react'
import './styles/cards.css'

const Cards = ({item,handleClick}) => {
    const {productName,quantity,price,productImage}=item;
  return (
    <div className='cards'>
        <div className="imagebox">
            <img src={productImage} alt="" />
        </div>
        <div className="details">
            <p>{productName}</p>
            <p>{quantity}</p>
            <p>{price}Rs</p>
            <button onClick={()=>handleClick(item)}>add to cart</button>
        </div>
    </div>
  )
}

export default Cards