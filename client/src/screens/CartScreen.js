import React from 'react'
import CartItem from '../components/CartItem'
import './Cart.css'

const CartScreen = () => {
  return (
    <div className='cartscreen'>
      <div className='cartscreen__left'>
        <h2>Shopping</h2>
        <CartItem/>
      </div>
      <div className='cartscreen__right'>
        <div className='cartscreen__info'>
          <p>Subtotal (0) items</p>
          <p>$499</p>


        </div>
        <div>
          <button type=""> Procedd to check</button>
        </div>

      </div>
      

    </div>
  )
}

export default CartScreen