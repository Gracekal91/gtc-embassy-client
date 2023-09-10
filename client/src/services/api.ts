import axios from 'axios';
import Cookies from "js-cookie";
import {LogoutHandler, getUserData} from "../utils/helper";

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
            return response.data;
        }

    }catch (error) {
        throw error;
    }
}

export const Logout = async() => {
    try{
        //check if Auth exist
        const user: any = getUserData();
        console.log('USER', user);
        if (!user) return "Can't log user out - kill the session"
        const headers = {
            Authorization: `Bearer ${user.token}`
        }
        const response = await api.post(`/auth/logout`, {
            //TODO: grab the ID - pass along with the access token.
            id: user.userId
        },
            {headers}
        );
        if(response.status === 200 || response.status === 401){
            LogoutHandler()
            window.location.href = '/'
        }
    }catch (e) {
        // @ts-ignore
        if(e.response.status === 401 || e.response.status === 403){
            LogoutHandler()
            window.location.href = '/'
        }
        console.log('Error', e, 'Custom Error', 'Could not log the use out' );
    }
}

  export const GetData = async () =>{
    try{

        // @ts-ignore
        const user: any = JSON.parse(getUserData());
        const userToken = user.token;
        // @ts-ignore
        const response = await api.get (`/visas`,{
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        });
        return response.data;
    }catch(e){
        console.log('Error', e)
    }
  }

  export const GetVisaById = async (id: any) =>{
      // @ts-ignore
      const user: any = JSON.parse(getUserData());
      const userToken = user.token;
      console.log('SINGLE VISA - RESPONSE', userToken);

      try{
          const response = await api.get(`/visaby/${id}`, {
              headers: {
                  Authorization: `Bearer ${userToken}`,
              },
          })
            console.log('DATA FROM API', response.data)
          return response.data;
      }catch (e) {
          console.log('Error - Failed to fetch a single visa --- /visaby/id -- from api.ts', e)
      }

  }
