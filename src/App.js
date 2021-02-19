import React, { Fragment, useEffect } from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './Checkout';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import SectionHeader from './SectionHeader';
import Login from './Login';
import { toast } from 'react-toastify';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

toast.configure();
function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (

    <Fragment>

    <Router>

    <Switch>
    
      <Route path="/checkout">
        <Header/>
        <SectionHeader/>
        <Checkout/>
      </Route>
    
      <Route path="/home">
        <Header/>
        <SectionHeader/>
        <Home/>
      </Route>

      <Route path="/">
        <Login/>
      </Route>

    </Switch>

    </Router>

    </Fragment>
  );
}

export default App;
