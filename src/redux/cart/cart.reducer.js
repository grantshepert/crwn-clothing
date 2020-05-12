import { CartActionTypes } from './cart.types';
import { addItemToCart,removeItemFromCart,clearItemFromCart } from './cart.utils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
}

const cartReducer = (state = INITIAL_STATE,action) => {
	console.log("ACTION: ");
	console.log(action);
	switch( action.type ) {
		case CartActionTypes.TOGGLE_CART_HIDDEN:
			console.log("HIDDEN");
			return {
				...state,
				hidden: !state.hidden
			}
		case CartActionTypes.ADD_ITEM:
			console.log("ADDING");
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			}
		case CartActionTypes.REMOVE_ITEM:
			console.log("REMOVING");
			return {
				...state,
				cartItems: removeItemFromCart(state.cartItems, action.payload)
		}
		case CartActionTypes.CLEAR_ITEM_FROM_CART:
			console.log("CLEARING");
			return {
				...state,
				cartItems: clearItemFromCart(state.cartItems, action.payload)
		}
		default:
		return state;

	}
}

export default cartReducer;