import React from 'react';
import Meal from './Meal'


export default function MealList({ mealData }){
    const nutrients = mealData.nutrients;
    return(
        <main>
           
            <h1>Yummm, check out these options!</h1>
            <section class="meals">
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />; 
                })}
                
            </section>
        </main>
    );
}