// here we'll make the http request to our backend to get the product details and add it to the cart
import * as actionTypes from '../constants/cartConstants';
import axios from 'axios'; // will help us make our ajax requests

export const addToCart = (id, qty) => async (dispatch, getState) => {
    // async (dispatch) is the return value of the function addToCart
    try {
        // console.log("before fetching data");
        // console.log("id "+id);
        const {data} = await axios.get(`${process.env.BASE_URL}/api/products/${id}`);
        // console.log("after fetching data");

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload:{
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price:data.price,
            countInStock: data.countInStock,
            qty,
        },
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        console.log('Error adding to cart:', error.message);
    }
}

export const addToServiceCart = (id, qty) => async (dispatch, getState) => {
    // async (dispatch) is the return value of the function addToCart
    try {
        // console.log("before fetching data");
        // console.log("id "+id);
        const {data} = await axios.get(`/api/services/${id}`);
        // console.log("after fetching data");

    dispatch({
        type: actionTypes.ADD_TO_SERVICE_CART,
        payload:{
            service: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price:data.price,
            countInStock: data.countInStock,
            qty,
        },
    });

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        console.log('Error adding to cart:', error.message);
    }
}

export const removeFromCart = (id) => (dispatch,getState) =>{
    try {
        dispatch({
            type: actionTypes.REMOVE_FROM_CART,
            payload: id
        });
    
        localStorage.setItem('cart',JSON.stringify(getState().cart.cartItems));
    } catch (error) {
        console.log('Error removing from cart:', error);
    }
    
}