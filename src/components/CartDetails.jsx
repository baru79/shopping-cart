import { useCart } from '../hooks/useCart';
import { CartDetailsRow } from './CartDetailsRow';
import './CartDetails.css';

export function CartDetails() {
	const { cart } = useCart();
	return (
		<ul className='cart-details'>
			<li>
				<div>Producto</div>
				<div>Cant.</div>
				<div>Precio</div>
				<div>Total</div>
			</li>
			{cart.map(item => (
				<CartDetailsRow key={item.id} {...item} />
			))}
		</ul>
	);
}
