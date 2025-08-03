import { useState, useEffect } from "react";
import MealItem from "./MealItem.jsx";


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
            {
                availableMeals.map((meal)=>(<MealItem key={meal.id} meal={meal}/>))
            }
            
        </ul>
        
        </>
    );
}