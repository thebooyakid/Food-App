import React from 'react';
import Meal from './Meal'


export default function MealList({ mealData }){
    const nutrients = mealData.nutrients;
    return(
        <main>
            <p>&nbsp;</p>
            <h2>What's for dinner?</h2>
            <section class="meals">
                {mealData.meals.map((meal) => {
                    return <Meal key={meal.id} meal={meal} />; 
                })}
                
            </section>
        </main>
    );
}