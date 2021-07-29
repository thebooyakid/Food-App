import React from 'react';
import Meal from './Meal';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    meals:{
        display: 'flex'
    },
})

export default function MealList({ mealData }:any){
    const classes = useStyles();
    const nutrients = mealData.nutrients;
    return(
        <main>
            <p>&nbsp;</p>
            <h2>What's for dinner?</h2>
            <section className={classes.meals}>
                {mealData.meals.map((meal:any) => {
                    return <Meal key={meal.id} meal={meal} />; 
                })}
                
            </section>
        </main>
    );
}