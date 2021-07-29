import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import { classicNameResolver } from 'typescript';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    instructions:{
    fontSize: '0.9rem',
    marginBottom: '1rem',
    },
    recipeLink:{
        background: '#81b29a',
        '&:hover': {
          background: '#3D405B',
        },
        color: 'white',
        border: 0,
        borderRadius: 6,
        boxShadow: '0 3px 5px 2px grey',
        height: 30,
        padding: '0 25px', 
        paddingTop: '8px',
        margin: '5px 0',
        textAlign: 'center',
        textDecoration: 'none',
    },
    faveLink:{
        background: '#3d405b',
        '&:hover': {
          background: '#81b29a',
        },
        color: 'white',
        border: 0,
        borderRadius: 6,
        boxShadow: '0 3px 5px 2px grey',
        height: 30,
        padding: '0 25px', 
        margin: '5px 0',
        textAlign: 'center',
        textDecoration: 'none',
    },
    article:{
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem',
        margin: '0 1rem',
        maxWidth: '18rem',
        boxShadow: '0 4px 8px 2px grey',
        background: 'white',
        borderRadius: '8px'
    },
})

export default function Meal({meal}) {
    
    const [imageUrl, setImageUrl] = useState ("")

    useEffect(() => {
        fetch(
            `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=c899723440494d5a91d95fc2c51a6a98&includeNutrition=false`
        )
        .then((response) => response.json())
        .then((data) => {
            setImageUrl(data.image);
        })
    }, [meal.id]);

    const setData = () => {
        localStorage.setItem('myData', JSON.stringify(meal));
        console.log(meal)   
    };

    const classes = useStyles();

    return (
        <article className={classes.article}>
            <h1>{meal.title}</h1>
            <img src={imageUrl} alt="recipe" />
            <ul className={classes.instructions}>
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Number of servings: {meal.servings}</li>
            </ul>

            <a className={classes.recipeLink} href={meal.sourceUrl} target="_blank">Go to Recipe</a>
            <Button className={classes.faveLink} onClick={ () => setData()}>Save to Favorites</Button>
        </article>
    )
}