import {useState, useEffect} from "react";
import {GetData} from "../services/api";

export const useGetData = () =>{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        async function fetchData(){
            try{
                const response = await GetData();
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