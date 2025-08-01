import logoImg from "../../src/assets/logo.jpg";

export default function Header(){
    return(
        <>
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A resto"/>
                <h1>Tummy Fills</h1>
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
        </>
    );
}