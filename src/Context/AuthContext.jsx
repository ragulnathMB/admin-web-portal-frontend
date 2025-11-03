import { useState,useContext,createContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) =>{
    const [currentPage,setCurrentPage] = useState();

    return (
        <AuthContext.Provider value={{currentPage}}>
            {children}
        </AuthContext.Provider>
    );
}
const useAuth = () =>{
    return useContext(AuthContext);
}
export {useAuth,AuthContext,AuthProvider};