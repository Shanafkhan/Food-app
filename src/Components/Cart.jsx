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
  function handleGoToCheckout(){
    userProgressCtx.showCheckout();
  }  
  return (
    <Modal className='cart' open={userProgressCtx.progress === "cart"} onClose={userProgressCtx.progress === "cart" ? handldeCloseModal : null }>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItems
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className='total'>{currencyFormatter.format(cartTotal)}</p>
      <p className='modal-actions'>
        <Button textOnly onClick={handldeCloseModal}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to checkout</Button>
        )}
      </p>
    </Modal>
  );
}
