import Cookies from "js-cookie";

export const LogoutHandler = () =>{
    sessionStorage.clear();
    document.cookie = 'GTE_AUTH=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    console.log('Successful logged-out')
}

export const getAccessToken = () => {
    const token = Cookies.get('GTE_AUTH');
   return !!token;
}
