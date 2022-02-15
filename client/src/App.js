import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Add from './Pages/Add';
import Errors from './Pages/Errors';

import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    
    <div className="App">
      <div> 
      <NavBar/>
      </div>
      <h1> Mern app </h1>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route  path='/add' component={Add}/>
          <Route  path='/*' component={Errors}/>
          
        </Switch>
    </div>
  );
}

export default App;
