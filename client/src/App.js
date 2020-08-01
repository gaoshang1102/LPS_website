import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import './App.css';

import Navbar from './components/navbar.component';
import Day0 from './components/day0.component';
import Hour6 from './components/hour6.component';
import Day1 from './components/day1.component';
import Day2 from './components/day2.component';
import Day3 from './components/day3.component';
import Day7 from './components/day7.component';

function App() {
  return (
    <Router>
      
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={Day0} />
      <Route path="/day0" component={Day0} />
      <Route path="/hour6" component={Hour6} />
      <Route path="/day1" component={Day1} />
      <Route path="/day2" component={Day2} />
      <Route path="/day3" component={Day3} />
      <Route path="/day7" component={Day7} />
      </div>
    </Router>

  );
}

export default App;
