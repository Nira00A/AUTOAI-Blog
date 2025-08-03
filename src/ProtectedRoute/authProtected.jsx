import { Navigate } from "react-router-dom"
import { useAuth } from "../contextApis/authContext"
import Loading from "../LoadingPages/authLoading";
import { useEffect , useState} from "react";

const ProtectedAuth = ({children}) => {
    const { user , role , loading} = useAuth()

    if(loading){
        return <Loading />
    }

    if (user || role === 'user') {
        return <Navigate to="/new" replace />;
    }

    return children;
}

export default ProtectedAuth