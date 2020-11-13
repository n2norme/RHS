import React from 'react';
import './Parcours.scss';
import Button from '../Button';

function Parcours() {
    return (
    <section id="parcours">
            <div className="container-fluid parcours-background">
                <div className="row parcours-heading">
                    <h4 id="parcours-title">Venez vous promener et découvrir des quartiers :</h4>
                </div>
                <div id="images-wrapper">
                    <div id="parcours-img-1">
                        <h5 className="parcours-subtitle">Leurs histoires</h5>
                    </div>
                    <div id="parcours-img-2">
                        <h5 className="parcours-subtitle">Leurs architectures</h5>
                    </div>
                    <div id="parcours-img-3">
                        <h5 className="parcours-subtitle">Leurs habitants</h5>
                    </div>
                </div>
                <div id="button-wrapper">
                    <Button/>
                </div>
            </div>
    </section>
    )
}

export default Parcours
