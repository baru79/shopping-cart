import { updateLocalStorage } from '../helpers/index.js';

export const CART_ACTIONS_TYPES = {
	ADD_TO_CART: 'ADD_TO_CART',
	REMOVE_FROM_CART: 'REMOVE_FROM_CART',
	REDUCE_QTY: 'REDUCE_QTY',
	CLEAR_CART: 'CLEAR_CART',
};

export const UPDATE_STATE_BY_ACTION = {
	[CART_ACTIONS_TYPES.ADD_TO_CART]: (state, action) => {
		const { id } = action.payload;
		const productInCartIndex = state.findIndex(item => item.id === id);

		// si el producto esta en el carrito
		if (productInCartIndex >= 0) {
			// usando el structuredClone
			// const newState = structuredClone(state);
			// newState[productInCartIndex].quantity += 1;

			// usando el map
			// const newState = state.map((item) => {
			//   if (item.id === id) {
			//     return { ...item, quantity: item.quantity + 1 };
			//   }
			//   return item;
			// });

			// usando el spread operator y slice
			const newState = [
				...state.slice(0, productInCartIndex),
				{
					...state[productInCartIndex],
					quantity: state[productInCartIndex].quantity + 1,
				},
				...state.slice(productInCartIndex + 1),
			];

			updateLocalStorage('cart', newState);
			return newState;
		}

		// si el producto no esta en el carrito
		const newState = [...state, { ...action.payload, quantity: 1 }];
		updateLocalStorage('cart', newState);
		return newState;
	},
	[CART_ACTIONS_TYPES.REMOVE_FROM_CART]: (state, action) => {
		const id = action.payload;
		const newState = state.filter(item => item.id !== id);
		updateLocalStorage('cart', newState);
		return newState;
	},
	[CART_ACTIONS_TYPES.REDUCE_QTY]: (state, action) => {
		const id = action.payload;
		const productInCartIndex = state.findIndex(item => item.id === id);

		// si el producto esta en el carrito
		if (productInCartIndex >= 0) {
			const newState = state.map(item => {
				if (item.id === id) {
					return { ...item, quantity: item.quantity - 1 };
				}
				return item;
			});
			updateLocalStorage('cart', newState);
			return newState;
		}
	},
	[CART_ACTIONS_TYPES.CLEAR_CART]: () => {
		updateLocalStorage([]);
		return [];
	},
};
