export function CartItem({
  thumbnail,
  title,
  price,
  quantity,
  reduceQty,
  removeFromCart,
  addToCart,
}) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={quantity > 1 ? reduceQty : removeFromCart}>-</button>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}
