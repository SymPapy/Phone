import { Route, Switch } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Accueil from './Components/Accueil';
import Search from './Components/Search';
import AddContact from './Components/AddContact';
import ErrorPage from './Components/ErrorPage';


function App() {
  return (
    
            <Switch>

                <Route exact path ="/" component = { SignIn }/>
                <Route path ="/Accueil" component = { Accueil }/>
                <Route path ="/Afficher" component = { Search }/>
                <Route path ="/Ajouter" component = { AddContact }/>
                <Route component = { ErrorPage }/>

            </Switch>
     
  );
}

export default App;
