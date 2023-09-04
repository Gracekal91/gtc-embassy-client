import {useMutation, useQuery} from 'react-query';
import {Login, GetData} from '../services/api';

export const useLoginMutation = () =>{
    return useMutation((credentials: {email: string; password: string}) => {
        return Login(credentials.email, credentials.password);
    });
};

export const useGetDataQuery = () => {
    // @ts-ignore
    return useQuery = () =>{
        return GetData();
    }
}