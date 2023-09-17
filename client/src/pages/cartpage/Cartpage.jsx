import React from 'react'
import CartItem from '../../components/cartItem/CartItem'
import './cartpage.css'

const Cartpage = () => {
  return (
    <div className='cartscreen'>
      <div className='cartscreen_left'>
        <h2>Shopping Cart</h2>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        <CartItem/>
      </div>
      <div className='cartscreen_right'>
        <div className="cartscreen_info">
          <p>SubTotal (0) items</p>
          <p>$499.78</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cartpage
