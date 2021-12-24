import './App.css';

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';

const Login = lazy(() => import('./components/LoginScreen/LoginPage'));
const Register = lazy(() => import('./components/register/Register'));
const Timeline = lazy(() => import('./components/TimeLine/Timeline'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route exact path='/' component={Timeline} ></Route>
            {/* <Route path = '/profile/:username' component={}></Route> */}
            
            <Route exact path="/login" component = {Login}></Route>
            <Route exact path="/register" component = {Register}></Route>
          </Switch>
        </Suspense>
      </Router>
    </>
     
  );
}

export default App;
