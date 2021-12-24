import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import LoginPage from './components/LoginScreen/LoginPage';
import Register from './components/register/Register';
import Timeline from './components/TimeLine/Timeline';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Timeline} ></Route>
          
          <Route exact path="/login" component = {LoginPage}></Route>
          <Route exact path="/register" component = {Register}></Route>
        </Switch>
      </Router>
    </>
     
  );
}

export default App;
