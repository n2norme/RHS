import React from 'react';
import './Start.scss';
import PlayButton from '../PlayButton';



function Start() {
    return (
        <section id="start-page">
            <div className="container-fluid">
                <div className="heading">
                    <h2>Quel quartier souhaitez-vous visiter ?</h2>
                </div>
            </div>
            <div className="container-fluid background">
                <div className="row">
                        <div className="box">
                            <div className="box-description">
                                <h6>Valenciennes</h6>
                                <h5>Dutemple</h5>
                            </div>
                                <PlayButton url="/dutemple"/>
                        </div>
                </div>
                <div className="row">
                        <div className="box">
                            <div className="box-description">
                                <h6>Mons</h6>
                                <h5>Epinlieu</h5>
                            </div>
                                <PlayButton url="/epinlieu"/>
                        </div>
                </div>
                <div className="row">
                        <div className="box">
                            <div className="box-description">
                                <h6>Mons</h6>
                                <h5>Jemappes</h5>
                            </div>
                                <PlayButton url="/jemappes"/>
                        </div>
                </div>
              
            </div>
        </section> 
    );
}

export default Start;
