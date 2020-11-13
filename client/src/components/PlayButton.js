import React from 'react';
import PlayButtonIcon from './PlayButtonIcon';
import {Link} from 'react-router-dom';
import './PlayButton.scss';

function PlayButton(props) {
    return (
        <div className="button-container">
            <Link to={props.url} className="play-button"><PlayButtonIcon/></Link>
        </div>
    )
}

export default PlayButton;
