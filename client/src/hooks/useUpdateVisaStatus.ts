import {useState, useEffect} from "react";
import {UpdateStatus} from "../services/api";

export const useUpdateVisaStatus = (id: any, value: any) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchData(){
            try{
                // @ts-ignore
                const response = await UpdateStatus(id, value);
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