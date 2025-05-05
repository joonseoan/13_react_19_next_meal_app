export interface Meal {
  id: number
  title: string
  slug: string
  image: string
  summary: string
  creator: string
}

export type Meals = Meal[]

export interface MealItemProps extends Meal {}