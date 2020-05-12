import { CartActionTypes } from './cart.types';

export const toggleCartHidden = () => ({
	type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => {
	console.log('ADD!');
	return {
		type: CartActionTypes.ADD_ITEM,
		payload: item
	}
}

export const removeItem = item => {
	console.log('REMOVE!');
	return {
		type: CartActionTypes.REMOVE_ITEM,
		payload: item
	}
}

export const clearItemFromCart = cartItem => {
	console.log('CLEAR!');
	console.log(cartItem);
	return {
		type: CartActionTypes.CLEAR_ITEM_FROM_CART,
		payload: cartItem
	}
}
