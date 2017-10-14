import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Nav from './Nav/Nav';
import About from './About/About';
import Home from './Home/Home';
import style from './style.css';

const App = ({ header }) => (
  <Router>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' exact component={About} />
      {/* <Route path='/posts' /> */}
    </Switch>
  </Router>
);

export default App;
