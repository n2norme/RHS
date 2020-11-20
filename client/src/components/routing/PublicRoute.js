import {React, Fragment} from 'react';
import {Route} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

export const PublicRoute = ({ component: Component , ...rest})=>{
    return (
        <Route {...rest}  component={(props)=>(
            <Fragment>
                <Header /> {/* HEADER ALWAYS VISIBLE */}
                <Component {...props} />
                <Footer/>
            </Fragment>
        )}
        />
    )
}