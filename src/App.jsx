import Header from "./Components/Header";
import Meals from "./Components/Meals";
import { CartContextProvider } from "./store/CartContext.jsx";
import { UserProgressContextProvider } from "./store/UserProgress";
import Cart from "./Components/Cart";
function App() {
  return (
    <>
      <UserProgressContextProvider>
        <CartContextProvider>
          <Header />
          <Meals />
          <Cart />
        </CartContextProvider>
      </UserProgressContextProvider>
    </>
  );
}

export default App;
