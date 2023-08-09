import {useState} from 'react';
import {Login} from '../services/api';

export const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const loginUser = async (email: string, password: string) => {
        try{
            setLoading(true);
            setError('');

            const userData = await Login(email, password);
            // @ts-ignore
            setUser(userData);

        }catch (error) {
            setError('Invalid username or password')
        }finally{
            setLoading(false);
        }
    }

    const logoutUser = () => {
        setUser(null)
    };

    return {
        user,
        loading,
        error,
        loginUser,
        logoutUser
    }
};