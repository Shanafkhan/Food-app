import { useState, useEffect } from "react";


export default function Meals(){
    const [availableMeals, setAvailableMeals] =useState([]);
    useEffect(()=>{
        async function getMeals(){
            const response = await fetch('http://localhost:3000/meals');
            const resData = await response.json();
            setAvailableMeals(resData);
        }
        getMeals();
    },[]);
    return(
        <>
        <ul id="meals">
            {availableMeals.map((meal)=>(<li key={meal.id} className="meal-item">
                <article>
                    <img src={meal.img} alt={meal.name} />
                </article>
                {meal.name}
            </li>))}
        </ul>
        
        </>
    );
}