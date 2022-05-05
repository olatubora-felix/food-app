import { useReducer } from "react";
import CartContext from "./cart-context";
import cartReducer from "./cartReducer";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};


const CartProvider = props => {
  const[cartState, dispatchCartAction]=useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: "ADD", item: item})
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({type: "REMOVE", id})
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider