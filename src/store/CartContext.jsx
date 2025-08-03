import { createContext,useReducer } from "react";
//define the context 
const CartContext =  createContext({
    items : [],
    addItem : (item)=>{},
    removeItem : (id)=>{},
});

function cartReducer(state, action){
    if(action.type === 'ADD_ITEM'){
        const existingCartItemIndex = state.items.findIndex((item)=> item.id === action.item.id);

        const updatedItems = [...state.items]

        if (existingCartItemIndex > -1){
            const existingItem = state.item[existingCartItemIndex]
            const updateItem = {
                ...existingItem,
                quantity : existingItem.quantity + 1
            }
        }
        else {
            updatedItems.push({...action.item, quantity : 1});
        }

        return {
            ...state, items : updatedItems
        }
    }

    if(action.type === 'REMOVE_ITEM'){
        // ...remove the Item from the meals
    }

    return state;
}

export function cartContextProvider({children}){
    useReducer(cartReducer, {items : []}) // useReducer hook to optimized state update 
    return <CartContext>{children}</CartContext>
}

export default CartContext; 