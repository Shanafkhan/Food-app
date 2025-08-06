import { useContext } from "react";
import logoImg from "../../src/assets/logo.jpg";
import Button from "./UI/Button.jsx"; 
import CartContext from "../store/CartContext";
import  UserProgressContext  from "../store/UserProgress";
export default function Header(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);
    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {return totalNumberOfItems+item.quantity } , 0)
    function handleShowcart(){
        userProgressCtx.showCart();
    }
    return(
        <>
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A resto"/>
                <h1>Tummy Fills</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowcart}>Cart {totalCartItems}</Button>
            </nav>
        </header>
        </>
    );
}