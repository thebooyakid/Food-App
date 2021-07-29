import React, {useState} from 'react';
import firebase from 'firebase/app';
import { useAuth, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { Input } from '../sharedComponents/input';
import { Container, Button, makeStyles, Typography, Snackbar,  } from '@material-ui/core';
import { RouteComponentProps, withRouter } from "react-router-dom";
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {useSigninCheck} from 'reactfire';
import { Link } from 'react-router-dom';



const Alert = (props:AlertProps) => {
    return <MuiAlert elevation={6} variant='filled' {...props} />
}

const useStyles = makeStyles({
    googleButton:{
        background: '#81b29a',
        '&:hover': {
          background: '#3D405B',
        },
        padding: '0',
        color: 'white',
        height: '50px',
        width: '240px',
        textAlign: 'center',
        boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
        fontSize: '16px',
        display: 'block',
        borderRadius: '8px',
        fontFamily: 'Roboto, arial, sans-serif',
        marginLeft: '29%',
        marginBottom: '5px'
    },
    googleLogo:{
        width: '48px',
        height: '48px',
        display: 'block'
    },

    containerStyle: {
        marginTop: '150px'
    },
    snackBar: {
        color: 'white',
        backgroundColor: '#4caf50'
    },
    signout:{
        background: '#3d405b',
    '&:hover': {
      background: '#81b29a',
    },
    color: 'white',
    marginLeft: '29%',
    padding: '0',
    height: '50px',
    width: '240px',
    textAlign: 'center',
    boxShadow: 'rgb(0 0 0 / 25%) 0px 2px 4px 0px',
    fontSize: '16px',
    borderRadius: 8
    },
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
    
})



interface SignInProps{
    history: RouteComponentProps["history"];
    location: RouteComponentProps["location"];
    match: RouteComponentProps["match"];
}

export const SignIn = withRouter( (props:SignInProps) => {
    const auth = useAuth();
    const classes = useStyles();
    const {history} = props;
    const [open,setOpen] = useState(false);
    
    const handleSnackOpen = () => {
        setOpen(true)
    }

    const handleSnackClose = (event?:React.SyntheticEvent, reason?:String) => {
        if(reason === 'clickaway'){
            return;
        }
        setOpen(false)
        history.push('/recipe')
    }

    const sign_in = async () => {
        const response = await auth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
        if(response.user){
            handleSnackOpen()
        }
    }

    const sign_out = async () => {
        await auth.signOut();
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
                    </ul>
                </div>
            </nav>
            <div>
                <Container maxWidth = 'sm' className={classes.containerStyle}>
                    
                    <AuthCheck fallback={
                        <Button className={classes.googleButton} onClick={sign_in}>Sign In With Google</Button>
                    }>
                        <Button className={classes.googleButton}>Sign In With Google</Button>
                        {/* <Button variant='contained' color='secondary' onClick={sign_out}>Sign Out</Button> */}
                        <Button onClick={sign_out} className={classes.signout}>Sign Out</Button>
                    </AuthCheck>
                    <Snackbar message={'Success'} open={open} autoHideDuration={1000} onClose={handleSnackClose}>
                    <Alert onClose={handleSnackClose} severity="success">
                        Successful Sign In
                    </Alert>
                    </Snackbar>

                </Container>
            </div>
            
            
        </div>

    )
})