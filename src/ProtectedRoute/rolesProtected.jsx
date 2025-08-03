import { Navigate } from "react-router-dom"
import { useAuth } from "../contextApis/authContext"
import Loading from "../LoadingPages/authLoading";
import { useEffect, useState } from "react";

const ProtectedRole = ({children}) => {
    const { user , role , loading} = useAuth()

    if(loading){
        return <Loading />
    }
    
    if (!user || !role) {
        console.log('user:', user, 'role:', role);
        return <Navigate to="/signin"/>;
    }

    return children;
}

export default ProtectedRole