import React from 'react';
import './Projet.scss';

function Projet() {
    return (
        <section id="project">
            <div id="project-img">
                <h3 id="partners-title">Les partenaires du projet</h3>
            </div>
            <div className="container-fluid">
                <div className="partners-wrapper">
                    <img src="https://www.uphf.fr/DEVISU/sites/default/files/images/actu2018-19/rhs_logo.jpg" alt="logo Interreg" id="logo-interreg"/>
                    <img src="https://popschool.fr/wp-content/uploads/2019/05/popschool.png" alt="logo POP School" id="logo-pop"/>
                    <p id="main-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sequi, placeat earum mollitia reprehenderit eum modi minima nobis cupiditate velit provident ipsam neque unde a iusto dolorem harum iste maxime.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, perspiciatis? Eveniet ipsa delectus et culpa modi repudiandae voluptates nisi sint iusto laboriosam, quidem ipsum cum nesciunt quisquam unde vero deserunt.
                    </p>
                </div>
            </div>
        </section>
       
    )
}

export default Projet;
