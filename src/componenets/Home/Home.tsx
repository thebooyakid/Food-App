import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import peaches1 from '../../assets/images/peaches1.jpg';
import cow1 from '../../assets/images/cow1.jpg';
import earth1 from '../../assets/images/earth1.jpg';
import { Input } from '../sharedComponents/input';
import { AuthCheck } from 'reactfire';


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
        textDecoration: 'none',
        padding: '1em',
        color: 'black',
        '&:hover': {
            color: '#F4F1DE',
        }
    },
    
    main: {
        display: 'flex',
        background: '#F4F1DE',
        borderRadius: 15,
        marginLeft: '5%',
        marginTop: '3%',
        width: '90%',
        height: '10%',
    },
    main_text:{
        display: 'flex',
        textAlign: 'center',
        marginLeft: '18%',
        paddingTop: '90px',
        paddingBottom: '100px',
       
    },
    button:{
        background: '#81b29a',
        '&:hover': {
          background: '#3D405B',
        },
        color: 'white',
        border: 0,
        borderRadius: 6,
        boxShadow: '0 3px 5px 2px grey',
        height: 30,
        padding: '5px 25px', 
        margin: '2px 0',
        textDecoration: 'none',
    },
    motivational_text:{
        display: 'flex',
        color: 'white',
        background: '#81b29a',
        padding: '25px',
        borderRadius: 7,
    },
    diet_facts_text:{
        display: 'flex',
        color: 'white',
        background: '#81b29a',
        padding: '25px',
        borderRadius: 7,
    },

    motivational_text2:{
        display: 'flex',
        color: 'white',
        background: '#f2cc8f',
        padding: '25px',
        borderRadius: 7,
    },
    diet_facts_text2:{
        display: 'flex',
        color: 'black',
        background: '#f2cc8f',
        padding: '25px',
        borderRadius: 7,
    },
    
    body1:{
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '10%',
        marginTop: '-2%',
        width: '80%',
    },
 
    body2:{
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '5%',
        marginTop: '-2%',
        width: '90%',
        
    },
    body3:{
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '10%',
        marginTop: '-2%',
        width: '80%',
        
    },
    peaches:{
        borderRadius: 8,
        marginTop: '8px'
    },
    earth:{
        borderRadius: 8,
        marginTop: '80px'
    },
    cow:{
        borderRadius: 8,
        marginTop: '20px'
    },
    panText:{
        fontSize: 40,
        marginBottom: 2,
    },
    googleSign:{
        display: 'flex',
        paddingTop: '90px',
        paddingBottom: '100px',
        marginLeft: '10%',
        textAlign: 'center',
    }
    
})

interface Props {
    title: string;
}

export const Home = ( props:Props) => {
    
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
                            <Link to='/' className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to='recipe' className={classes.nav_a}>Recipe</Link>
                        </li>
                        <li>
                            <Link to='favorites' className={classes.nav_a}>Favorites</Link>
                        </li>
                        <li>
                            <Link to='signin' className={classes.nav_a}>Sign In</Link>
                        </li>
                        <li>
                            <Link to='signin' className={classes.nav_a}>Sign Out</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <ul>
                    <h3>Welcome to</h3>
                    <h1 className={classes.panText}>{ props.title }</h1>
                    <h2>We're happy you're here.</h2>
                    <h4>Sign in and go to the recipe page to get 3 vegan</h4>
                    <h4>meal options to choose from!</h4>
                    <p>&nbsp;</p>
                    </ul>
                </div>
                <div className={classes.googleSign}>

                    <ul>
                    <h3>It's easy to make an account!</h3>
                    <h3>All you have to do is</h3>
                    <li>&nbsp;</li>
                    <Link to='signin' className={classes.button}>Sign in with Google</Link>
                    <li>&nbsp;</li>
                    <li>&nbsp;</li>
                    <h5>Scroll Down for Some Motivation</h5>
                    </ul>
                </div>
            </main>
            <section id="target" className={classes.body1}>  
                <div className={classes.motivational_text}>
                    <ul>
                        <li><h2>Do it for your Body</h2></li>
                        <li></li>
                        <li></li>
                        <div>
                        <img className={classes.peaches} src={peaches1}></img>
                        </div>
                    </ul>
                </div>
                <div className={classes.diet_facts_text}>
                    <ul>
                        <li>A Plant-Based Diet May Lower Your Blood Pressure</li>
                        <li>&nbsp;</li>
                        <li>A Plant-Based Diet May Keep Your Heart Healthy</li>
                        <li>&nbsp;</li>
                        <li>A Plant-Based Diet May Help Prevent Type 2 Diabetes</li>
                        <li>&nbsp;</li>
                        <li>Eating a Plant-Based Diet Could Help You Lose Weight</li>
                        <li>&nbsp;</li>
                        <li>Following a Plant-Based Diet Long Term May Help You Live Longer</li>
                        <li>&nbsp;</li>
                        <li>A Plant-Based Diet May Decrease Your Risk of Cancer</li>
                        <li>&nbsp;</li>
                        <li>A Plant-Based Diet May Improve Your Cholesterol </li>
                        <li>&nbsp;</li>
                        <li>Eating a Plant-Based Diet May Minimize Your Risk of Stroke</li>
                        <li>&nbsp;</li>
                        <li>Ramping Up Your Plant Intake May Keep Your Brain Strong</li>
                        <li>&nbsp;</li>
                        
                    </ul>
            
                </div>
            </section>  

            <section className={classes.body2}>  
                <div className={classes.diet_facts_text2}>
                
                    <ul>
                        <li>If one person exchanges eating meat for a vegan diet, they'll reduce carbon dioxide</li>
                        <li>emissions by 1.5 tons per year</li>
                        <li>&nbsp;</li>
                        <li>Chickens, turkeys, pigs and cows are are collectively the largest producer of methane</li>
                        <li>in the United States</li>
                        <li>&nbsp;</li>
                        <li>The meat, egg and dairy industries produce 65% of worldwide nitrous oxide emissions</li>
                        <li>&nbsp;</li>
                        <li>One calorie from animal protein requires eleven times as much fossil fuel as one</li>
                        <li>calorie of plant protein</li>
                        <li>&nbsp;</li>
                        <li>Nearly half of all water used in the United States goes to raising animals for food.</li>
                        <li>&nbsp;</li>
                        <li>Chicken, hog and cattle excrement has polluted 35,000 miles of rivers in 22 states</li>
                        <li>&nbsp;</li>
                        <li>Raising animals for food uses 30% of the Earth's land mass </li>
                        <li>&nbsp;</li>
                        <li>More than 260 million acres of United States forests have been cleared to create</li>
                        <li>cropland to grow grain to feed farmed animals</li>
                        <li>&nbsp;</li>
                        <li>Livestock grazing is the number one cause of plant species becoming threatened or</li>
                        <li>going extinct in the United States</li>
                        <li>&nbsp;</li>
                        <li>Animal agriculture is responsible for up to 91% of the Amazon rainforest destruction</li>
                        <li>&nbsp;</li>
                        
                    </ul>
               
                </div>
                <div className={classes.motivational_text2}>
                <ul>
                        <li><h2>Do it for the Earth</h2></li>
                        <li></li>
                        <li></li>
                        <div>
                        <img className={classes.earth} src={earth1}></img>
                        </div>
                    </ul>
                    
                </div>
            </section>  

            <section className={classes.body3}>  
                <div className={classes.motivational_text}>
                <ul>
                        <li><h2>Do it for the Animals</h2></li>
                        <li></li>
                        <li></li>
                        <div>
                        <img className={classes.cow} src={cow1}></img>
                        </div>
                    </ul>
                   
                </div>
                <div className={classes.diet_facts_text}>
              
                    <ul>
                        <li>Each vegan spares 30 animal lives a year</li>
                        <li>&nbsp;</li>
                        <li>99% of farmed animals spend their whole lives confined in factory farms</li>
                        <li>&nbsp;</li>
                        <li>Around the world, over 150 million farmed animals are killed each day</li>
                        <li>&nbsp;</li>
                        <li>Animal agriculture causes ocean dead zones due to overfishing, pollution</li>
                        <li>and climate change</li>
                        <li>&nbsp;</li>
                        <li>We could see fishless oceans by 2048</li>
                        <li>&nbsp;</li>
                        <li>The US government has killed millions of wild animals to protect the meat</li>
                        <li>industry</li>
                        <li>&nbsp;</li>
                        <li>Humans produce enough grain to feed the world, but we choose to feed most</li>
                        <li>of it to animals just so we can eat mea</li>
                        <li>&nbsp;</li>
                        {/* <li>nimize Your Risk of Stroke</li>
                        <li>&nbsp;</li>
                        <li> Keep Your Brain Strong</li> */}
                        
                    </ul>
                 
                </div>
            </section>  
            
        </div>
    )
}

