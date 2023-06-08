import React from 'react'
import {ShoppingCart} from 'phosphor-react'
import "./styles/navbar.css"

const Navbar = ({size,setShow}) => {
  return (
 <nav>
    <div className="navbar">
        <span className="myshop" onClick={()=>setShow(true)}>
            FARM2FRESH 
        </span>
        <div className="cart" onClick={()=>setShow(false)}>
            <span>
               <ShoppingCart size={32}/>
            </span>
            <span>{size}</span>
        </div>
    </div>
 </nav>
  )
}

export default Navbar