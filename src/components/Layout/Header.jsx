import classes from './header.module.css';
import MealImg from '../../assets/meals.jpg'

import React, { Fragment } from 'react'
import HeaderCartButton from './HeaderCartButton';

const Header = ({onShowCart}) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeal</h1>
       <HeaderCartButton onShowCart={onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={MealImg} alt="meal" />
      </div>
    </Fragment>
  )
}

export default Header