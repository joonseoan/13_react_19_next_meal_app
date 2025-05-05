import { Meal } from '@/app/meals/mealsTypes';
import classes from './meals-grid.module.css'
import MealItem from './meals-item';

function Meals({ meals }: { meals: Meal[] }) {
  return <ul className={classes.meals}>
    { meals.map((meal) => <li key={meal.id} >
      <MealItem {...meal} />
    </li>)}
  </ul>
}

export default Meals;