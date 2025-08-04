import { createContext, useReducer } from "react";
//define the context
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // check if the passed or newly added item is in the cart if yes return the index
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    //  update the items 
    const updatedItems = [...state.items];
    // if the item exists update the item quantity 
    if (existingCartItemIndex > -1) {
      const existingItem = state.item[existingCartItemIndex];
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
    } else {
      updatedItems.push({ ...action.item, quantity: 1 }); // else push the item with the quantity
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    // check for the existing item 
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedItems = [...state.items];
    // if it has only one quantity of the item remove the item from the array 
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1, //decrease the number of the qauantity 
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return{...state, items : updatedItems };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const[cart, dispatchCartAction] = useReducer(cartReducer, { items: [] }); // useReducer hook to optimized state update

  function addItem(item){
    dispatchCartAction({type : 'ADD_ITEM', item});
  } 

  function removeItem(id){
    dispatchCartAction({type : 'REMOVE_ITEM', id})
  }

    const cartContext = {
        items : cart.items,
        addItem,
        removeItem
    }
  return <CartContext.Provider value={cartContext }>{children}</CartContext.Provider>;
}

export default CartContext;
