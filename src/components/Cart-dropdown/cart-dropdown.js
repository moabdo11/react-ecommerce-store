import React from 'react';

import SingleButton from '../UI/Buttons/Singlebutton';


import './cart-dropdown.styles.scss';


const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items' />
        <SingleButton>CHECKOUT</SingleButton>
    </div>
);

export default CartDropdown;