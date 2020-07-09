import React from 'react';
import  {connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import SingleButton from '../UI/Buttons/Singlebutton';
import CartItem from '../Cart-item/Cart-item';
import { toggleCartHidden } from '../../redux/Cart/cart.actions';


import './cart-dropdown.styles.scss';


const CartDropdown = ( { cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? (
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
            )  : (
                <span className='empty-message'>Your cart is empty fam! Fill that shit up.</span>
            )}
        </div>
        <SingleButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            CHECKOUT
        </SingleButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));