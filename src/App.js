import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import LoginPage from './components/LoginScreen/LoginPage';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/loginPage" component = {LoginPage}></Route>
        </Switch>
      </Router>
    </>
     
  );
}

export default App;
