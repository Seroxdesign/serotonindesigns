import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ContactPage from './pages/Contact/ContactPage';
import LinkPage from './pages/Links/LinkPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (

      <Router basename={process.env.PUBLIC_URL}>
    
          <Switch>
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/contact" component={ContactPage}></Route>
            <Route exact path="/links" component={LinkPage}></Route>
          </Switch>

      </Router>

     
  );
}

export default App;
