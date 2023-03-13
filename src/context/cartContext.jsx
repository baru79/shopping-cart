import { createContext, useReducer } from 'react';
import { cartReducer } from '../reducers/cartReducer.js';

import { CART_ACTIONS_TYPES } from '../actions/cartActions.js';
import { cartInitialState } from '../initialStates/index.js';

export const CartContext = createContext();

function useCartReducer() {
	const [state, dispatch] = useReducer(cartReducer, cartInitialState);

	const addToCart = product =>
		dispatch({
			type: CART_ACTIONS_TYPES.ADD_TO_CART,
			payload: product,
		});

	const removeFromCart = id =>
		dispatch({
			type: CART_ACTIONS_TYPES.REMOVE_FROM_CART,
			payload: id,
		});

	const reduceQty = id =>
		dispatch({
			type: CART_ACTIONS_TYPES.REDUCE_QTY,
			payload: id,
		});

	const clearCart = () =>
		dispatch({
			type: CART_ACTIONS_TYPES.CLEAR_CART,
		});

	const checkProductInCart = product => {
		return state.some(item => item.id === product.id);
	};

	const getTotalPrice = () => {
		const res = state.reduce(
			(acum, currentValue) => currentValue.price * currentValue.quantity + acum,
			0
		);
		return res;
	};

	const isCartEmpty = state.length === 0;
	return {
		cart: state,
		addToCart,
		clearCart,
		removeFromCart,
		reduceQty,
		checkProductInCart,
		getTotalPrice,
		isCartEmpty,
	};
}

export function CartProvider({ children }) {
	const {
		cart,
		addToCart,
		clearCart,
		removeFromCart,
		reduceQty,
		checkProductInCart,
		getTotalPrice,
		isCartEmpty,
	} = useCartReducer();
	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				clearCart,
				removeFromCart,
				reduceQty,
				checkProductInCart,
				getTotalPrice,
				isCartEmpty,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
