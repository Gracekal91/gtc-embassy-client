import React from 'react'
import '../assests/scss/auth.scss'
import LoginForm from "../components/auth/LoginForm";
import flag from '../assests/images/flag.jpeg';

const myBg = {
    backgroundImage: `url(${flag})`,
}



function Auth() {
    return (
        <div className='gt_lg_container'>
            <div className="gt_login_header">
            </div>
            <div className="gt_lg_content">
                <div className="gt_lp_text">
                    <h1>Soyez le bienvenue a l'embassade de la Republique Democratique du Congo</h1>
                </div>
                <div className="gt_lp_form">
                    <h3 className="gt_form_title">BIENVENUE A G-EMBASSY</h3>
                    <LoginForm />
                </div>
            </div>
        </div>
    )
}

export default Auth
