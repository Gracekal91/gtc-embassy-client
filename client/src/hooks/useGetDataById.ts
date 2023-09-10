import {useState, useEffect} from "react";
import {GetVisaById} from "../services/api";

export const useGetDataById = (id: any) =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await GetVisaById(id);
                // @ts-ignore
                setData(response);
            }catch (e) {
                console.log(e, 'error while fetching data')
                setLoading(false)
            }
        }
        fetchData();

    }, [])

    return{
        data,
        loading,
        error
    }
}