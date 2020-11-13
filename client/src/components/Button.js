import React from 'react';
import './Button.scss';
import {Link} from 'react-router-dom';

function Button() {
    return (
        
            <Link to="/start"><button className="start-button">Commencer</button></Link>
    );
}

export default Button
