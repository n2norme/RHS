import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';


function Header() {
  return (
    
    <nav className="navbar navbar-expand-lg rhs-navbar fixed-top">
      <button className="navbar-toggler collapsed navbar-dark" type="button" data-toggle="collapse" data-target="#rhs-navbar" aria-controls="rhs-navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon icon" />
      </button>
      <Link to="/">
        <img src="https://www.uphf.fr/DEVISU/sites/default/files/images/actu2018-19/rhs_logo.jpg" alt="logo rhs" className="logo"/>
      </Link>
      <div className="navbar-collapse  collapse" id="rhs-navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link links" to="/">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link links" to="/parcours">Les parcours</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link links" to="/projet">Le projet</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link links" to="/contact">Nous contacter</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header



