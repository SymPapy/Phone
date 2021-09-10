import { Route, Switch } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Accueil from './Components/Accueil';
import Afficher from './Components/Afficher';
import AddContact from './Components/AddContact';
import ErrorPage from './Components/ErrorPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
          
            <Switch>
                
                <Route exact path ="/" component = { SignIn }/>
                <Route path ="/Accueil" component = { Accueil }/>
                <Route path ="/Afficher" component = { Afficher }/>
                <Route path ="/Ajouter" component = { AddContact }/>
                <Route component = { ErrorPage }/>

            </Switch>

     
  );
}

export default App;
