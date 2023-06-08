import React, { useEffect, useState } from 'react'
import "./styles/cart.css"

const Cart = ({cart,setCart,handleChange}) => {
    const [price,setPrice]=useState(0);

    const handleprice=()=>{
        let ans =0;
        cart.map((item)=>(
            ans+=item.amount*item.price
        ))
        setPrice(ans)
    }

    const handleRemove=(id)=>{
        const arr=cart.filter((item)=>item.id!==id)
        setCart(arr)
        handleprice()
    }
        useEffect(()=>{
            handleprice();
        })
  
  return (
    <article>
        {
            cart?.map((item)=>(
                <div className="cartbox" key={item.id}>
                    <div className="cartimg">
                        <img src={item.productImage} alt="" />
                        <p>{item.productName}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item,+1)}> +</button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item,-1)}>-</button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))
        }
        <div className='total'>
          <span>Total price </span>
                    <span>{price}Rs</span>
                    </div>
    </article>
  )
}

export default Cart