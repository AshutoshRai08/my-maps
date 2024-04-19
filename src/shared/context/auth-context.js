import { createContext } from "react";

export const AuthContext=createContext({
    isLoggedIn:false,
    login:()=>{},
    logout:()=>{}//Method , a function in a object
})