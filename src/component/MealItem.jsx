import {Link} from "react-router-dom";

function MealItem(props) {
    const {idMeal, strMeal, strMealThumb} = props
    return (<div className='card'>
            <div className='card-image'>
                <img src={strMealThumb} alt={strMealThumb}/>
            </div>
            <div className='card-content'>
                <span className='card-title'>{strMeal}</span>
            </div>
            <div className='card-action'>
                <Link to={`/mealItem/${idMeal}`} className='btn blue lighten-3'>
                    Watch recipe
                </Link>
            </div>
        </div>
    )
}

export {MealItem}