import { combineReducers } from 'redux';
import categories from './categories';
import products from './products';
import cart from './cart';

export default combineReducers({ categories, products, cart });
