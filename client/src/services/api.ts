import axios from 'axios';
import Cookies from "js-cookie";
import {LogoutHandler} from "../utils/helper";

const api = axios.create({
    baseURL: 'http://localhost:3500/api/v1',
    withCredentials: true
})

export const Login = async(email: string, password: string)=>{
    try{
        // @ts-ignore
        const response = await api.post(`/auth/login`, {
            email,
            password
        },
            // @ts-ignore
            {
                withCredentials: true
            }
        );

        if(response.status === 200){
            //save access token as a cookie
            const {accessToken, user_id} = response.data;
            const auth = {
                userId: user_id,
                token: accessToken
            }

            // @ts-ignore
            sessionStorage.setItem('Auth', JSON.stringify(auth));

            console.log('DATA', response.data)
            return response.data;
        }

    }catch (error) {
        throw error;
    }
}

export const Logout = async() => {
    try{
        //check if Auth exist
        const data = sessionStorage.getItem('Auth')
        if (!data) return "Can't log user out - kill the session"
        const dataObj = JSON.parse(data);
        const headers = {
            Authorization: `Bearer ${dataObj.token}`
        }
        const response = await api.post(`/auth/logout`, {
            //TODO: grab the ID - pass along with the access token.
            id: dataObj.userId
        },
            {headers}
        );
        console.log('LOGOUT RESPONSE', response)
        if(response.status === 200){
            LogoutHandler()
            window.location.href = '/'
        }
    }catch (e) {
        console.log('Error', e, 'Custom Error', 'Could not log the use out' );
    }
}





//Create axios response type