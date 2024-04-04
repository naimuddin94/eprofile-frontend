/**
 * External API Prefix
 */

export const apiUrl = process.env.NEXT_PUBLIC_API_URL;


export const getData = () =>{
    return localStorage.getItem('isLogin')
}