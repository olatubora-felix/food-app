import { meals } from "../../data";
import classes from './AvaliableMeals.module.css'

import React from 'react'
import Card from "../UI/Card";
import MealItem from "./MealItems/MealItem";

const AvaliableMeals = () => {
  return (
   <section className={classes.meals}>
     <Card>
      <ul>
        {meals.map(meal => (  
          <MealItem meal={meal} key={meal.id} />
        ))}
      </ul>
     </Card>
   </section>
  )
}

export default AvaliableMeals