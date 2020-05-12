import { createSelector } from 'reselect';

const selectUser = state => state.user;

/*
MULTIPLE!
const selectCart = state => state.cart;

export const selectCurrentUser = createSelector(
	[selectUser, selectCart],
	(user,cart) => user.currentUser
)

OR

export const selectCurrentUser = createSelector(
	selectUser,
	selectCart,
	(user,cart) => user.currentUser
)

*/

export const selectCurrentUser = createSelector(
	[selectUser],
	(user) => user.currentUser
)

