import React, { useContext } from 'react';
import MealItemForm from '../MealItemForm/MealItemForm';
import classes from './MealItem.module.css'
import CartContext from '../../../store/cart-context'

const MealItem = ({meal}) => {
  const cartCtx = useContext(CartContext)
  const {price, id ,name, description} = meal;

  const fixedPrice = `$${price.toFixed(2)}`

  const onAddToCartHandler = amount => {
      cartCtx.addItem({
        id: id,
        name: name,
        amount: amount,
        price: price,
      })
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{fixedPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={onAddToCartHandler}/>
      </div>
    </li>
  )
}

export default MealItem