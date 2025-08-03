import logoImg from "../../src/assets/logo.jpg";
import Button from "./UI/Button.jsx";
export default function Header(){
    return(
        <>
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A resto"/>
                <h1>Tummy Fills</h1>
            </div>
            <nav>
                <Button textOnly>Cart (0)</Button>
            </nav>
        </header>
        </>
    );
}