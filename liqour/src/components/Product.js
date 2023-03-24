import { FaShoppingCart, FaRegBookmark, FaStar } from "react-icons/fa";
import React from 'react'
import "./Product.css"

export default function Product(props) {
  return (
    <div className='List'>
      <div key={props.id} className='Card'>
        <img src={props.image} alt='prod-img' className="Image" />

        <FaShoppingCart className={'Cart'} />
        <FaRegBookmark className={'Bookmark'} />

        <div className="product-content">
          <h3 className="product-name">{props.name}</h3>
          <div className="Display_1">
            <div className="product-price">${props.price}</div>
            <div className="product-sales">{props.sale}</div>
          </div>
          <div className="Display_2">
            
          </div>
        </div>
      </div>
    </div>
  )
}
