import { useDispatch,useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './cartpage.css'

//Component
import CartItem from '../../components/cartItem/CartItem'

//Actions
import { addToCart, addToServiceCart, removeFromCart } from '../../redux/actions/cartActions'

const Cartpage = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  // console.log(cartItems);
  const qtyChangeHandler = (id,qty) =>{
    cartItems.map((item)=> item.product === id ? dispatch(addToCart(id,qty)) : item.service === id ? dispatch(addToServiceCart(id,qty)): console.log("Success") );
  }
  const removeCartItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () =>{
    return cartItems.reduce((qty,item)=> Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () =>{
    let priceItem = cartItems.reduce(
      (price,item) => item.product 
      ? price > 1000 && price <=5000 
       ? price = price+ (item.price +  item.price*0.12)*(item.qty)
       : price > 5000 
       ?
       price = price+ (item.price +  item.price*0.18)*(item.qty)
       :
       price = price+ (item.price +  200)*(item.qty)
      : 
       price > 1000 && price <=8000 
        ? price =  price+(item.price +  item.price*0.1)*(item.qty)
        : price > 8000 
        ?
        price = price+ (item.price +  item.price*0.15)*(item.qty)
        :
        price = price+ (item.price +  100)*(item.qty)
      ,0);
    return priceItem
  }


  return (
    <div className='cartscreen'>
      <div className='cartscreen_left'>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                item={item}
                qtyChangeHandler = {qtyChangeHandler}
                removeCartItem = {removeCartItem}
              />
            ))
          )}
      </div>
      <div className='cartscreen_right'>
        <div className="cartscreen_info">
          <p>INVOICE</p>
          <p>Total Quantity : {getCartCount()}</p>
          <p>Price (Including all the taxes): <br/> <br />${getCartSubTotal().toFixed(2)}</p>
        </div>
        <div>
          <button>Proceed To Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cartpage
