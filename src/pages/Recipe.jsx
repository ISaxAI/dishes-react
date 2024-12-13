import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMealById} from "../api";
import {Preloader} from "../component/Preloader";

function Recipe() {
    const [recipe, setRecipe] = useState({})
    const {id} = useParams()
    useEffect(() => {
        getMealById(id).then((data) => setRecipe(data.meals[0]));
    }, [id]);
    return (
        <>
            {!recipe.idMeal ? (<Preloader/>) : (
                <div className='recipe'>
                    <img src={recipe.strMealThumb} alt="strMealThumb"/>
                    <h1>{recipe.strMeal}</h1>
                    <h6>Main ingredient: {recipe.strCategory}</h6>
                    {recipe.strArea ? <h6>Country: {recipe.strArea} </h6> : null}
                    <table>
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(recipe).map(key =>{
                                    if(key.includes('Ingredient') && recipe[key]){
                                        return(
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>{
                                                    recipe[`strMeasure${key.slice(13)}`]
                                                }</td>
                                            </tr>
                                        )
                                    }
                                    return null
                                })
                            }
                        </tbody>
                    </table>
                    <p>{recipe.strInstructions}</p>
                    {recipe.strYoutube ? (
                        <div className="row">
                            <h5>Youtube Guide : </h5>
                            <a href={recipe.strYoutube}>Video</a>
                            <iframe title={id} src={recipe.strYoutube}/>
                        </div>
                    ) : null}
                </div>
            )}
        </>
    )
}

export {Recipe}