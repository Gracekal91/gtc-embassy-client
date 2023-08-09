import {useMutation} from 'react-query';
import {Login} from '../services/api';

export const useLoginMutation = () =>{
    return useMutation((credentials: {email: string; password: string}) => {
        console.log('credentials from auth queries', credentials)
        return Login(credentials.email, credentials.password);
    });
};