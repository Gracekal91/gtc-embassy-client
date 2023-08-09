import axios from 'axios';

const BASE_URL: string = 'http://localhost:3500/api/v1';

export const Login = async(email: string, password: string)=>{
    try{
        const response = await axios.post(`${BASE_URL}/auth/login`, {
            email,
            password
        });

        if(response.status === 200){
            //save access token as a cookie
            const {accessToken} = response.data;

            return response.data;
        }

    }catch (error) {
        throw error;
    }
}





//Create axios response type