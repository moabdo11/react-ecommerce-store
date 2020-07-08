import React from 'react';
import  {connect } from 'react-redux';

import SingleButton from '../UI/Buttons/Singlebutton';
import CartItem from '../Cart-item/Cart-item';


import './cart-dropdown.styles.scss';


const CartDropdown = ( { cartItems }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))} 
        </div>
        <SingleButton>CHECKOUT</SingleButton>
    </div>
);

const mapStateToProps = ({ cart: { cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);