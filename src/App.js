import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import {Results, BuyConfirmation} from './Pages/buy';

import Navbar from './Components/navbar';
import Home from './Pages/home';
import About from './Pages/about';
import Sell from './Pages/sell';
import Appraisal from './Pages/appraisal';
import AppraisalChat from './Pages/appraisalchat';
import PackingInstructions from './Pages/packingInstructions';
import Repair from './Pages/repair';
import {RepairRequest, RepairConfirm} from './Pages/repairRequest';
function App() {
  return (
    <div className="App bg-light">
      <Navbar/>
      <div className="Page">
        <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/Buy">
            <Results/>
          </Route>
          <Route path="/BuyConfirm">
            <BuyConfirmation/>
          </Route>
          <Route path="/About">
            <About/>
          </Route>
          <Route path="/Sell">
            <Sell/>
          </Route>
          <Route exact path="/Appraisal">
            <Appraisal/>
          </Route>
          <Route path="/AppraisalChat">
            <AppraisalChat/>
          </Route>
          <Route path="/PackingInstructions">
            <PackingInstructions/>
          </Route>
          <Route exact path="/Repair">
            <Repair/>
          </Route>
          <Route path="/RepairRequest">
            <RepairRequest/>
          </Route>
          <Route path="/RepairConfirm">
            <RepairConfirm/>
          </Route>
        </Switch>
        </Router>
      </div>
      
    </div>
  );
}

export default App;
