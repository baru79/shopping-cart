export function CartDetailsRow({ title, quantity, price }) {
	return (
		<li className='cart-details'>
			<div>{title}</div>
			<div>{quantity}</div>
			<div>${price}</div>
			<div>${price * quantity}</div>
		</li>
	);
}
