export const addItemToCart = (cartItems, cartItemToAdd) => {
	const cartItemExists = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
	);
	
	if(cartItemExists) {
		return cartItems.map(
			cartItem => cartItem.id === cartItemToAdd.id
			? { ...cartItem, quantity: cartItem.quantity+1 }
			: cartItem
		);
	}

	return [...cartItems,{...cartItemToAdd,quantity: 1}];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const currentCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToRemove.id
	);
	
	if(currentCartItem.quantity === 1) {
		return cartItems.filter( cartItem => cartItem.id !== cartItemToRemove.id );
	}
	else {
		return cartItems.map(
			cartItem => cartItem.id === cartItemToRemove.id
			? { ...cartItem, quantity: cartItem.quantity-1 }
			: cartItem
		);		
	}

}


export const clearItemFromCart = (cartItems, cartItemToRemove) => {
	console.log("DOING REMOVE STUFF!");
	cartItems = cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
	return cartItems;
}