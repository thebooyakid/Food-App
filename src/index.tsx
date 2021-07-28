import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import { Home, SignIn, Recipe, Favorites } from './componenets';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import 'firebase/auth';
// import { firebaseConfig } from './firebaseConfig'

ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseAppProvider firebaseconfig={firebaseConfig}> */}
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home title={'A Pan and a Plan'}/>
        </Route>

        <Route exact path='/recipe'>
          <Recipe></Recipe>
        </Route>

        <Route exact path='/favorites'>
          <Favorites></Favorites>
        </Route>

        <Route exact path='/signin'>
          <SignIn></SignIn>
        </Route>
    
      </Switch>
    </Router>
    {/* </FirebaseAppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
