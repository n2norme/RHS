import React from 'react';
import './Contact.scss';

function Contact() {
    return (
        <section id="contact">
            <h2 id="contact-title">Contact</h2>
            <form>
                <div className="form-container">
                    <label for="name" className="form-label">Votre prénom</label>
                    <input type="text" className="form-input" id="name"  placeholder="Entrez votre prénom"/>
                    <label for="lastname" className="form-label">Votre nom</label>
                    <input type="text" className="form-input" id="lastname"  placeholder="Entrez votre nom"/>
                    <label for="mail" className="form-label">Votre mail</label>
                    <input type="email" className="form-input" id="mail"  placeholder="Entrez votre mail"/>
                    <label for="message" className="form-label">Votre message</label>
                    <textarea className="form-message" id="message" rows="10"></textarea>
                    <button type="submit" className="send-button">Envoyer</button>
                </div>
            </form>

        </section>
    )

}
export default Contact;
