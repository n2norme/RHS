import React from 'react'
import './Home.scss';
import Button from '../Button';

function Home() {
    return (
            
    <section id="welcome-page">
        <div className="container-fluid image">
            <div className="caption">
                <div className="row h-100 justify-content-center align-item-center ">
                    <h1 id="main-title">Bienvenue</h1>
                </div>
                <div className="row justify-content-center align-item-center h-100 paragraph ">
                    <p id="subtitle">Venez vous promener dans les quartiers du projet Réseau Hainaut Solidaire</p>
                </div>
                <div className="row justify-content-center align-item-center h-100 start ">
                    <Button/>
                </div>
            </div>
            
        </div>
    </section>
    );
}

export default Home
