import React, {useState} from "react";
import MealList from './MealList'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
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
  }
})




export function Recipe() {
  const [mealData, setMealData] = useState(null);
  // const [calories, setCalories] = useState('');
  const [allergies, setAllergies] = useState('');
  
  // function handleChange(event){
  //   setCalories(event.target.value);
  // }

  function handleChange(event){
    setAllergies(event.target.value);
  }

  function getMealData(){
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=c899723440494d5a91d95fc2c51a6a98&diet=vegan&excludeIngredients=${allergies}&timeFrame=day`
      // &targetCalories=${calories}
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
  
  return <div className="App">
    <section className="controls">
      <h1>is this the place?</h1>
      <input
      type="string"
      placeholder="Enter allergy food if you're allergic to some shit"
      onChange={handleChange}/>
    </section>
    <Button className={classes.button} onClick={getMealData}>Get Options</Button>
    {mealData && <MealList mealData={mealData} />}
  </div>
}

// export function Recipe()
