import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import './sidebar.css'

const Sidebar = ({show,click}) => {
    const sideBarClass = ['sidebar']

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

const getCartCount = () =>{
  return cartItems.reduce((qty,item)=> qty + Number(item.qty), 0);
}

    if(show){
        sideBarClass.push('show')
    }
  return (
    <div className={sideBarClass.join(" ")}>
      <ul className='sidebar_links' onClick={click}>
        <li>
            <Link className='Sidelink' to="/cart">
            <i className='fas fa-shopping-cart'></i>
            <span>
                Cart 
                <span className='sidebar_cartbadge'>{getCartCount()}</span>
            </span>
            </Link>
        </li>
        <li>
            <Link className='Sidelink' to="/">
             Shop
            </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
