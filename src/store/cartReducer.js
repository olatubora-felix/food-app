const initialState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
 if(action.type === "ADD"){
   const updatedItems = state.items.concat(action.item);
   const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
   return {
     items: updatedItems,
     totalAmount: updatedTotalAmount
   };
 }
  return initialState
}

export default cartReducer