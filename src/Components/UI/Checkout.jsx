import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgress";
import { currencyFormatter } from "../../util/formatting";
import Button from "./Button";
import Input from "./Input";
export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handldeCloseModal() {
    userProgressCtx.hideCheckout();
  }
  return (
    <Modal open={userProgressCtx.progress === 'checkout'}>
      <form action=''>
        <h2>Checkout</h2>
        <p>Total Amount : {currencyFormatter.format(cartTotal)}</p>
        <Input label='Full Name' type='text' id='full-name' />
        <Input label='E-mail' type='email' id='email' />
        <Input label='Street' type='text' id='street' />
        <div className='control-div'>
          <Input label='Postal Code' type='text' id='postal-code' />
          <Input label='City' type='text' id='city' />
        </div>
        <p className='modal-actions '>
          <Button type='button' textOnly onClick={handldeCloseModal}>
            Close
          </Button>
          <Button >Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
