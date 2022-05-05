import React, {useContext} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './headerCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = ({onShowCart}) => {
  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button className={classes.button} onClick={onShowCart}>
      <span className={classes.icon}>
        <CartIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton