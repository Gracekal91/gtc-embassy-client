export const logoutHandler = () =>{
    sessionStorage.clear();
    document.cookie = 'GTE_AUTH=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}