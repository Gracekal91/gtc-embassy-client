import React from 'react'
import '../assests/scss/auth.scss'
import LoginForm from "../components/auth/LoginForm";
import Loader from "../components/shared/Loader";
import {Backdrop} from "../components/shared/Backdrop";
import {useAuth} from '../hooks/useAuth';


interface LoginProps {
    LoggedIn: string | boolean;
}

// @ts-ignore
function Auth({LoggedIn}) {
    const {loading} = useAuth();

    return (
        <>
            <div className='gt_lg_container'>
            <div className="gt_login_header">
            </div>
            <div className="gt_lg_content">
                <div className="gt_lp_text">
                    <h1>Soyez le bienvenue a l'embassade de la Republique Democratique du Congo</h1>
                </div>
                <div className="gt_lp_form">
                    {  loading &&
                        (
                            <>
                            <Backdrop />
                            <Loader spinnerColor="white" positionTop="50%"/>
                            </>
                        )
                    }
                    <h3 className="gt_form_title">BIENVENUE A G-EMBASSY</h3>
                    {
                        !LoggedIn ? <LoginForm /> : 'You are already logged in - Logout? or continue your session'
                    }

                </div>
            </div>
        </div>
            </>
    )
}

export default Auth
