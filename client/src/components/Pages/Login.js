import {React, useState} from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import './Login.scss';




function Login() {

    const [loginData, setLoginData] = useState({
        email:'',
        password:''
    });
    
    const [isAuth,setIsAuth] = useState(false);

    const {email,password} = loginData;


    const onChange = (e) => {
        setLoginData({...loginData, [e.target.name]: e.target.value});
    };

    const onSubmit = async (e) =>{
        e.preventDefault();

        try {
            const user = {
                email,
                password
            }

            const config = {
                headers:{
                    'Content-Type':'application/json'
                }
            };

            const body = JSON.stringify(user);

            const res = await axios.post('/api/auth',body,config);
            const token = res.data.token;
            window.localStorage.setItem('x-auth-token', token);
                
            const connect = await axios.get('/api/private/dashboard',{ headers: {"x-auth-token" : `${token}`} })
            console.log(connect.data);

            if(window.localStorage.getItem('x-auth-token')){
                setIsAuth(true);
            }
            
            

        } catch (err) {
            console.error(err.response.data);
        }
    }

    if(isAuth){
        return <Redirect to="/dashboard"/>
    }
      

    
    
    

    return (
        <section id="login">
            <form className="form-signin" onSubmit={e=> onSubmit(e)}>
                <div className="form-title">
                    <img className="logo-form" src="https://www.uphf.fr/DEVISU/sites/default/files/images/actu2018-19/rhs_logo.jpg" alt="logo RHS" />
                    <h2 className="login-title">Entrez vos identifiants</h2>
                </div>
                <div className="login-input">
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input name="email" id="inputEmail" className="login-form-input" placeholder="Adresse mail" required autoFocus onChange={e => onChange(e)} />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input name="password" id="inputPassword" className="login-form-input" placeholder="Mot de passe" required onChange={e => onChange(e)}  type="password"/>
                    <button className="connect-button login-form-input" type="submit">Connexion</button>
                </div>
            </form>
        </section>

        
    )
}



export default Login;
  