import React, {useState} from "react";
import MealList from './MealList'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({

  root:{
    padding: '0',
    margin: '0'
},
navbar_container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#c2c5aa',
    borderRadius: 15,
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
        color: 'green',
    }
},

  button:{
    background: 'green',
    '&:hover': {
      background: 'red',
    },
    color: 'white',
    border: 0,
    borderRadius: 6,
    boxShadow: '0 3px 5px 2px grey',
    height: 30,
    padding: '0 25px', 
    marginTop: '6px'
  },
  allergies:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  controls:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },



})




export function Recipe() {
  const [mealData, setMealData] = useState(null);
  // const [calories, setCalories] = useState('');
  const [allergies, setAllergies] = useState('');
  // const [ingredient, setIngredients] = useState('')
  
  // function handleChange(event){
  //   setCalories(event.target.value);
  // }

  function handleChange(event){
    setAllergies(event.target.value);
    // setIngredients(event.target.value);
  }

  function getMealData(){
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=c899723440494d5a91d95fc2c51a6a98&diet=vegan&excludeIngredients=${allergies},vodka&timeFrame=day`
      // &targetCalories=${calories}
      // &includeIngredients${ingredient}
      // `https://api.spoonacular.com/recipes/complexSearch?apiKey=c899723440494d5a91d95fc2c51a6a98&diet=vegan&excludeIngredients=vodka`
    )
    .then((response) => response.json())
    .then((data) => {
      setMealData(data);
      console.log(data);
    })
    .catch(() => {
      console.log("error");
    });
  }

  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <nav>
        <div className={classes.navbar_container}>
          <h1 className={ `${classes.logo} `}>
              <a href="#" className={ `${classes.logo_a} ${classes.logo_navigation}` }>Plant Powered</a>
          </h1>
            <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                <li>
                    <Link to='/' href="" className={classes.nav_a}>Home</Link>
                </li>
                <li>
                  <Link to='favorites' href="" className={classes.nav_a}>Favorites</Link>
                </li>
                {/* <li>
                    <Link to='recipe' href="" className={classes.nav_a}>Recipe</Link>
                </li>
                <li>
                    <Link to='signin' href="" className={classes.nav_a}>Sign In</Link>
                </li> */}
            </ul>
        </div>
      </nav>


  <div className={classes.allergies}>
    <section className={classes.controls}>
      <h1>Welcome to the Recipe Generator</h1>
      <h2>Press the Button Below to get 3 delicious Meal Options</h2>
      <h3>Don't Forget to Fill In the Box if There are Any Foods to Avoid</h3>
      <input
      type="string"
      placeholder="Enter allergy food"
      onChange={handleChange}/>
    </section>
    <Button className={classes.button} onClick={getMealData}>Get Options</Button>
    {mealData && <MealList mealData={mealData} />}
  </div>
  </div>
  )}

// export function Recipe()
