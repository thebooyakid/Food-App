import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Meal from '../Recipe/Meal';
import MealList from '../Recipe/MealList';


const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0',
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#81b29a',
        borderRadius: 15,
        width: '96%',
        marginLeft: '2%'
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black',
        '&:hover': {
            color: '#f4f1de',
        }
    },
    main: {
        background: 'white',
    },
    comingSoon: {
        textAlign: 'center'
    }
})


export const Favorites = () => {

    const classes = useStyles(); 

    const getData = () => {
        let data = localStorage.getItem('myData') as string;
        data = JSON.parse(data)
        console.log(data)
        return({data})
    }
  
    return (
        
        <div className={classes.root}>
            <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <a href="#" className={ `${classes.logo_a} ${classes.logo_navigation}` }>Plant Powered</a>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <Link to='/' className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to='recipe' className={classes.nav_a}>Recipe</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            
            <main className={classes.main}>
                <Button onClick={ () => getData() }>Get Favorites</Button>
                {/* {data.meals.map((meal: any) => {
                        return <Meal key={meal.id} meal={meal} />
                })}   */}
                <h1 className={classes.comingSoon}>Favorites Page Coming Soon</h1>
               
            
            </main>
            
            
        </div>
    )
}