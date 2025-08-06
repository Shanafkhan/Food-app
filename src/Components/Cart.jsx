import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgress.jsx";
import CartItems from "./UI/CartItems.jsx";
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartItems = cartCtx.items;
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  function handldeCloseModal() {
    userProgressCtx.hideCart();
  }
  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItems
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={()=>cartCtx.addItem(item)}
            onDecrease={()=>cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handldeCloseModal}>
          Close
        </Button>
        <Button onClick={handldeCloseModal}>Go to checkout</Button>
      </p>
    </Modal>
  );
}
