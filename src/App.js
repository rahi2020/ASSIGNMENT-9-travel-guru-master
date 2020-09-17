import React, { useState } from 'react';
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



firebase.initializeApp(firebaseConfig);
function App() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    newUser:false,
    name: '',
    email: '',
    password: '',
    photo: '',
  })

  const  googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();




  const handleSignIn = () => {
      firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const {displayName, photoURL, email} = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(signedInUser);
      })
      .catch(err => {
        console.log(err);
        console.log(err.message);
      })
  }





  const handleFbSignIn = () => {
    firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log('fb user after sign in', user);
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }






  const handleSignOut = () => {
    firebase.auth().signOut()
    .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          name: '',
          photo: '',
          email: '',
          error: '',
          success: false
        }
        setUser(signedOutUser);
    })
    .catch(err => {

    })
  }





  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S/.test(e.target.value);
    }
    if (e.target.name === 'password'){
      const isPasswordValid = e.target.value.length > 3;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber
    }
    if (isFieldValid) {
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }






  const handleSubmit = (e) => {
    // console.log(user.email, user.password)
     if (newUser &&  user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
      })
      .catch (error => {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
        updateUserName(user.name);
      });
     }




     if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const newUserInfo = {...user};
        newUserInfo.error = '';
        newUserInfo.success = true;
        setUser(newUserInfo);
        console.log('sign in user info', res.user);
      })
      .catch(function(error) {
        const newUserInfo = {...user};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        setUser(newUserInfo);
      });
     }

     e.preventDefault();
  }






  const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function() {
      console.log('user name updated successfully');
    }).catch(function(error) {
      console.log(error);
    });
  }









      
  return (
    <div className="App">
      <Navbar></Navbar>
      
        <Router>
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










   
        { 
          user.isSignedIn ? <button class="btn btn-warning" onClick={handleSignOut}>Sign out</button> :
          <button class="btn btn-warning"  onClick={handleSignIn}>Continue with Google</button>
        }

        <br/><br/>

        <button onClick={handleFbSignIn} class="btn btn-warning">Continue with Facebook</button>

        {
          user.isSignedIn && <div>
            <p>Welcome, {user.name}</p>
            <p>Your email: {user.email}</p>
            <img src={user.photo} alt=""/>
          </div>
        }






        <h1>Create an account</h1>
        <form onSubmit={handleSubmit}>
            <input type="checkbox" onChange={() => setNewUser(!newUser)}  name="newUser" id=""/>
            <label htmlFor="newUser">New User Sign up</label>
            <br/>
            {newUser && <input type="name" onBlur={handleBlur} name="first name" placeholder="First name" required/>}
            <br/><br/>
            {newUser && <input type="name" onBlur={handleBlur} name="last name" placeholder="Last name" required/>}
            <br/><br/>
            <input type="email" onBlur={handleBlur} name="email" placeholder="Your Email address" required/>
            <br/><br/>
            <input type="password" onBlur={handleBlur} name="password" placeholder="Your password" required/>
            <br/><br/>
            <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'}/>
        </form>

        <p style={{color: 'red'}}>{user.error}</p>
        {user.success && <p style={{color: 'green'}}>User {newUser ? 'Created' : 'Logged In'} successfully</p>}


      
    </div>
  );
}

export default App;
