import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './components/NavBar';
import Definition from './components/Definition';
import Exemple from './components/Exemple';
import TypeOfBruteForce from './components/TypeOfBruteForce';
import Protection from './components/Protection';
import Attacks from './components/Attacks';
function App() {
  return (
    <BrowserRouter basename="/bruteforce">
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Definition}/>
        <Route path="/example" component={Exemple}/>
        <Route path="/Types" component={TypeOfBruteForce}/>
        <Route path="/attacks" component={Attacks}/>
        
        <Route path="/protection" component={Protection}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
