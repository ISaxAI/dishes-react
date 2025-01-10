import {MealItem} from "../MealItem/MealItem";
import React from "react";
import styles from './MealsList.module.css'

function MealsList(props) {
    const {meals} = props
    return (
        <div className={styles.list}>
            {meals.map((meal) => (
                <MealItem key={meal.idMeal} {...meal}/>
                )
            )}
        </div>
    )
}

export {MealsList}