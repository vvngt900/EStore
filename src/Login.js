import React, { useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/home')
            })
            .catch(error => alert(error.message))
    }

    const signUp = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/home')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <Container style={{textAlign:"center"}}>
            <div className="lc-block col-md-4 col-md-offset-4 toggled" id="l-login">
                <div className="lcb-float"><Image className='brandIcon' src='https://firebasestorage.googleapis.com/v0/b/estore-5fb9b.appspot.com/o/Fuwu%2Ffuwu%20logoslow.gif?alt=media&token=1fee6ea8-560f-486f-85f4-d841e0f9402c' roundedCircle/></div>
                <div className="form-group">
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Username"/>
                </div>
                <div className="form-group">
                    <input type="password"value={password} onChange={e => setPassword(e.target.value)}  className="form-control" placeholder="Password"/>
                </div>
                <div className="clearfix"></div>
                <a href="" onClick={signIn} className="btn btn-block btn-primary btn-float m-t-25">Sign In</a>
                <a href="" onClick={signUp} className="btn btn-block btn-primary btn-float m-t-25">Register with Fuwu!!</a>
                <ul className="login-navigation">
                    <li data-block="#l-register" className="bg-green">Register</li>
                    <li data-block="#l-forget-password" className="bg-orange">Forgot Password?</li>
                </ul>
            </div>
        </Container>
    )
}

export default Login
