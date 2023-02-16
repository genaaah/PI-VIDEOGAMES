import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import VideogameCreated from './components/VideogameCreated';
import { getGenres } from './actions';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
    <Route exact path='/' component={LandingPage}/>
    <Route path='/home' component={Home}/>
    <Route path='/videogame' component={VideogameCreated}/>
    <Route path='/home/:id' component={getGenres}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
