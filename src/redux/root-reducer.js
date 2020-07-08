import { combineReducers } from 'redux'

import userReducer from './User/user';
import cartReducer from './Cart/cart.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});