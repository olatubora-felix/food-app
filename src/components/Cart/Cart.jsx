import React, { useContext } from 'react'
import classes from './Cart.module.css'
import { carts } from '../../data'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = ({onClose}) => {
  const cartCtx = useContext(CartContext)
  const {items, totalAmount} = cartCtx
  const totalAmounts = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0 ;

  const addItemHandler = (item) => {
    
  }
  const removeItemHandler = (id) => {

  }
  return (
    <Modal onClose={onClose}>
        <ul className={classes['cart-items']}>
          {items.map(item => (
            <CartItem item={item} key={item.id} onAdd={addItemHandler.bind(null, item)} onRemove={removeItemHandler.bind(null, item.id)}/>
          ))}
        </ul>
        <div className={classes.total}>
          <span>Total</span>
          <span>{totalAmounts}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={onClose}>Close</button>
          { hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
  )
}

export default Cart