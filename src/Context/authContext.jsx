import { createContext,useState,useContext } from "react";
const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    useState(()=>{
        const checkSession=async()=>{
            const response=await fetch('http://localhost:8000/auth/check-session',{
                credentials:'include'
            });
            const data=await response.json();
            setIsLoggedIn(data.isLoggedIn);
         }
        checkSession();
    },[]);
    return(
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth=()=>useContext(AuthContext);