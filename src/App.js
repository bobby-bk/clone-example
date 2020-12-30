import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import HomePage from './comps/Home';
import Header from './comps/Header';
import LoginForm from './comps/loginForm';

function App() {
  return (
   <BrowserRouter>
   <div>
   <Header></Header>
   <Switch>
   <Route Path="/" render={props => <div><HomePage /></div>}/>
   <Route Path="/account/sign" component={LoginForm}/>
   </Switch>
   </div>
   </BrowserRouter>
  );
}

export default App;
