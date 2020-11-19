import {React, useState} from 'react';
import './Contact.scss';
import axios from 'axios';

function Contact() {

    
   const [formData,setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
   });

   const [isSent,setIsSent] = useState(false);

   const {firstname,lastname, email,message} = formData;

    const onSubmit = async e => {
        e.preventDefault();
        
        try {
            const newContact = {
                firstname,
                lastname,
                email,
                message
            }

            const config = {
                headers:{
                    'Content-Type':'application/json'
                }
            };

            const body = JSON.stringify(newContact);

            const res = await axios.post('/api/contact',body,config);
            console.log(res.data);
            setIsSent(true);
            
            
        } catch (err) {
            console.error(err.response.data);
        }
    }

    const  MessageSent = () => {
        if(isSent){
            return (<p className="message">Message envoyé avec succès</p>)
        }else{
            return null;
        }
    }

    const onChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    }


    return (
        <section id="contact">
            <h2 id="contact-title">Contact</h2>
            <form onSubmit={e => onSubmit(e)}>
                <div className="form-container">
                    <label htmlFor="firstname" className="form-label">Votre prénom</label>
                    <input type="text" className="form-input" id="firstname"  placeholder="Entrez votre prénom" onChange={e => onChange(e)} value={firstname}/>
                    <label htmlFor="lastname" className="form-label">Votre nom</label>
                    <input type="text" className="form-input" id="lastname"  placeholder="Entrez votre nom"  onChange={e => onChange(e)} value={lastname}/>
                    <label htmlFor="mail" className="form-label">Votre mail</label>
                    <input type="email" className="form-input" id="email"  placeholder="Entrez votre mail" onChange={e => onChange(e)} value={email}/>
                    <label htmlFor="message" className="form-label">Votre message</label>
                    <textarea className="form-message" id="message" rows="10" onChange={e => onChange(e)}  value={message}></textarea>
                    <button type="submit" className="send-button">Envoyer</button>
                    
                </div>
            </form>
            <MessageSent/>
        </section>
    )

}
export default Contact;
