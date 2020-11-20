import React from 'react';
//import Header from './components/Header';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './components/Pages/Home';
import Parcours from './components/Pages/Parcours';
import Projet from './components/Pages/Projet';
import Contact from './components/Pages/Contact';
import Start from './components/Pages/Start';
import './App.scss';
//import Footer from './components/Footer';
import DistrictPage from './components/Pages/DistrictPage';
import Map  from '../src/components/Map/Map';
import Login from '../src/components/Pages/Login';
import {PrivateRoute} from './components/routing/PrivateRoute';
import Dashboard from './components/Pages/Dashboard';
import { PublicRoute } from './components/routing/PublicRoute';





function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home}/>
        <PublicRoute exact path="/start" component={Start}/>
        <PublicRoute exact path="/parcours" component={Parcours}/>
        <PublicRoute exact path="/projet" component={Projet}/>
        <PublicRoute exact path="/contact" component={Contact}/>
        <PublicRoute exact path="/dutemple" component={DistrictPage}/>
        <PublicRoute exact path="/epinlieu" component={DistrictPage}/>
        <PublicRoute exact path="/jemappes" component={DistrictPage}/>
        <PublicRoute exact path="/dutemple/map" component={Map}/>
        <PublicRoute exact path="/login" component={Login}/>
        <PrivateRoute exact path="/dashboard" component = {Dashboard}/>
      </Switch>
    </Router>





















        //
    
 
    
  );
}

export default App;
