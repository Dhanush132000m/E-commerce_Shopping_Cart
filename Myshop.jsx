import React from 'react'
import list from './list'
import "./styles/shop.css"
import Cards from './Cards'

const Myshop = ({handleClick}) => {
  return (
    <section>
        {
            list.map((item)=>(
                
                <Cards item={item} key={item.id}handleClick={handleClick}/>
            ))
        }
    </section>
  )
}

export default Myshop