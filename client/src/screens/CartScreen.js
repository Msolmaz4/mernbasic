import React from 'react'
import CartItem from '../components/CartItem'
import './Cart.css'

const CartScreen = () => {
  return (
    <div className='cartscreen'>
      <div className='cartscreen_left'>
        <h2>Shopping</h2>
        <CartItem/>
      </div>
      <div className='cartscreen_right'>

      </div>
      

    </div>
  )
}

export default CartScreen