import React from 'react';
import Header from './components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Parcours from './components/Pages/Parcours';
import Projet from './components/Pages/Projet';
import Contact from './components/Pages/Contact';
import Start from './components/Pages/Start';
import './App.scss';
import Footer from './components/Footer';
import DistrictPage from './components/Pages/DistrictPage';



function App() {
  return (
    
  <Router>
    <Header/>
    <Switch>
      <Route path="/" exact>
        <Home/>
      </Route>
      <Route path="/start" exact>
        <Start/>
      </Route>
      <Route path="/parcours" exact>
        <Parcours/>
      </Route>
      <Route path="/projet" exact>
        <Projet/>
      </Route>
      <Route path="/contact" exact>
        <Contact/>
      </Route>
      <Route path="/dutemple" exact>
        <DistrictPage/>
      </Route>
      <Route path="/epinlieu" exact>
        <DistrictPage/>
      </Route>
      <Route path="/jemappes" exact>
        <DistrictPage/>
      </Route>
    </Switch>
    <Footer/>
  </Router>
    
  );
}

export default App;
