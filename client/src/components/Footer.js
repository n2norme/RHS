import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons/faInstagramSquare';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare';
//import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import {Link} from 'react-router-dom';



function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid ">
            <p className="icons"> <span className="mx-2"><FontAwesomeIcon icon={faFacebookF} /></span> <span className="mx-2"><FontAwesomeIcon icon={faInstagramSquare} /></span> <span className="mx-2"><FontAwesomeIcon icon={faLinkedin} /></span> <span className="mx-2"><FontAwesomeIcon icon={faTwitterSquare} /></span> </p><small className="rights"><span>®</span>All Rights Reserved.</small>
            <Link className="connect" to="/login">Connexion</Link>
            </div>
        </footer>
      

    );
}

export default Footer
