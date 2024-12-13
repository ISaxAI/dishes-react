import {MealItem} from "./MealItem";
import React from "react";

function MealsList(props) {
    const {meals} = props
    return (
        <div className='list'>
            {meals.map((meal) => (
                <MealItem key={meal.idMeal} {...meal}/>
                )
            )}
        </div>
    )
}

export {MealsList}