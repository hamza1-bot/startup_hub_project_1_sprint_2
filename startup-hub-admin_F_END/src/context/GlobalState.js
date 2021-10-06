import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext"

const GlobalState=(props)=>{
    const[first_name, set_first_name]=useState('')
    const[last_name, set_last_name]=useState('')
    const[email, set_email]=useState('')
    const[is_logged_in, set_is_logged_in]=useState("false")
    const[token, set_token]=useState('')
    
    useEffect(() => {
        if(sessionStorage.getItem('is_logged_in') != null && sessionStorage.getItem('is_logged_in') == "true") {
            set_first_name(sessionStorage.getItem('first_name'))
            set_last_name(sessionStorage.getItem('last_name'))
            set_email(sessionStorage.getItem('email'))
            set_is_logged_in(sessionStorage.getItem('is_logged_in'))
            set_token(sessionStorage.getItem('token'));
        }
    }, []);
    
    const value={
        first_name, set_first_name,
        last_name, set_last_name,
        email, set_email,
        is_logged_in, set_is_logged_in,
        token, set_token
    }
    
    return (
        <>
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
        </>
    )
}

export default  GlobalState;