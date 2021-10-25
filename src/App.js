import './App.css';
import JobPage from 'pages/Jobs/JobPage';
import Homepage from 'pages/Homepage/Homepage';
import ContactPage from 'pages/Contact/ContactPage';
import SkillPage from 'pages/SkillPage/SkillPage';
import BlogPage from 'pages/Blog/BlogPage';
import BlogDirectory from 'pages/Blog/BlogDirectory';

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
            <Route exact path="/skill" component={SkillPage}></Route>
            <Route exact path="/blogs" component={BlogDirectory}></Route>
            <Route exact path="/blog" component={BlogPage}></Route>
            <Route exact path="/work" component={JobPage}></Route>
          </Switch>

      </Router>

     
  );
}

export default App;
