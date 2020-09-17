import React from 'react';
import './App.css';

import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

import Navbar from './Components/Navbar/Navbar';
import Travel from './Components/Travel/Travel';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';
import Destination from './Components/Destination/Destination';
import Blog from './Components/Blog/Blog';
import NotFound from './Components/NotFound/NotFound';






function App() {

return (
    <div className="App">
  <Router>
    <Navbar></Navbar>
        <Switch>
      
            <Route path="/news">
              <Travel></Travel>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/destination">
              <Destination></Destination>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route exact path="/">
              <Travel></Travel>
            </Route>
            <Route  path="*">
              <NotFound></NotFound>
            </Route>
        </Switch>
    </Router>

   
      
    </div>
  );
}

export default App;
