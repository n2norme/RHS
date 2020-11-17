import {React, useState} from 'react';
import './Contact.scss';
import axios from 'axios';

function Contact() {
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [isSent,setIsSent] = useState(false);

   
    function handleSubmit(e){
        axios.post('/api/contact',{
                    'firstname':firstname,
                    'lastname':lastname,
                    'email':email,
                    'message':message
        })
        .then((res) => {
            console.log(res);
        },
        (error) => {
            console.log(error)
        });

        e.preventDefault();
        setIsSent(true);
    }

    function MessageSent(){
        if(isSent){
            return (<p>Message envoyé</p>)
        }else{
            return null;
        }
    }

    return (
        <section id="contact">
            <h2 id="contact-title">Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <label htmlFor="firstname" className="form-label">Votre prénom</label>
                    <input type="text" className="form-input" id="firstname"  placeholder="Entrez votre prénom" onChange={(e) => setFirstname(e.target.value)}/>
                    <label htmlFor="lastname" className="form-label">Votre nom</label>
                    <input type="text" className="form-input" id="lastname"  placeholder="Entrez votre nom" onChange={(e) => setLastname(e.target.value)}/>
                    <label htmlFor="mail" className="form-label">Votre mail</label>
                    <input type="email" className="form-input" id="mail"  placeholder="Entrez votre mail" onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="message" className="form-label">Votre message</label>
                    <textarea className="form-message" id="message" rows="10" onChange={(e) => setMessage(e.target.value)}></textarea>
                    <button type="submit" className="send-button">Envoyer</button>
                    <MessageSent/>
                </div>
            </form>

        </section>
    )

}
export default Contact;
