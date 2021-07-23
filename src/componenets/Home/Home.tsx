import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import pasta from '../../assets/images/pasta.jpg'
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
    
    main: {
        background: '#a4ac86',
        borderRadius: 15,
        width: '100%',
        height: '100%',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        position: 'absolute',
        // opacity: 0.55,
    },
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#333d29',
    },
    button:{
        background: '#333d29',
        '&:hover': {
          background: '#582f0e',
        },
        color: 'white',
        border: 0,
        borderRadius: 6,
        boxShadow: '0 3px 5px 2px grey',
        height: 30,
        padding: '0 25px', 
        margin: '5px 0'
    },
    motivational_text:{
        color: 'white',
        top: '45%',
        left: '25%',
        position: 'absolute',
        background: '#582f0e',
        padding: '2px',
        borderRadius: 7,
    },
    diet_facts_text:{
        color: 'white',
        top: '45%',
        left: '66%',
        position: 'absolute',
        background: '#582f0e',
        padding: '2px',
        borderRadius: 7,
    }
    
})

interface Props {
    title: string;
}

export const Home = ( props:Props) => {
    
    const classes = useStyles();

    const [show,setShow]=useState(true)
    
    
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
                            <Link to='recipe' href="" className={classes.nav_a}>Recipe</Link>
                        </li>
                        <li>
                            <Link to='favorites' href="" className={classes.nav_a}>Favorites</Link>
                        </li>
                        <li>
                            <Link to='signin' href="" className={classes.nav_a}>Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className={classes.main}>
                <div className={classes.main_text}>
                    <h1>{ props.title }</h1>
                    <h3>Plant Based. 45 Minutes.</h3>
                    <h3>No Bologna</h3>
                    <p>Get 3 options based off of search criteria</p>
                    <Button className={classes.button}>Sign up to Get Recipes!</Button>
                </div>
                <div className={classes.motivational_text}>
                    {/* make these clickable and onclick reveal a new fact */}
                    {show?<p>Motivational Fact</p>:null}
                    <Button onClick={()=>setShow(!show)}>Did you Know?</Button>
                </div>
                <div className={classes.diet_facts_text}>
                    {show?<p>Health Fact</p>:null}
                    <Button>Did you Know</Button>
                </div>
            </main>
            
        </div>
    )
}

