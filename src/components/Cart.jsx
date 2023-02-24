import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import "./Cart.css";
import { useCart } from "../hooks/useCart.js";
import { CartItem } from "./CartItem.jsx";
import { CartDetails } from "./CartDetails.jsx";

export function Cart() {
  const cartCheckboxId = useId();
  const {
    cart,
    reduceQty,
    removeFromCart,
    addToCart,
    clearCart,
    isCartEmpty,
    getTotalPrice,
  } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type="checkbox" hidden id={cartCheckboxId} />
      <aside className="cart">
        <ul className="cart-items">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              reduceQty={() => reduceQty(item.id)}
              removeFromCart={() => removeFromCart(item.id)}
              addToCart={() => addToCart(item)}
              {...item}
            />
          ))}
        </ul>
        <CartDetails />
        <div className="total-price">Total price: ${getTotalPrice()}</div>
        {!isCartEmpty && (
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
        )}
      </aside>
    </>
  );
}
