
import {Navigate, } from "react-router-dom"

const ProtectedRoutes = ({Children}) => {
   
    const Token = localStorage.getItem("token")
    if(!Token){
        return <Navigate to="/login" replace/>
    }

  return Children;
};

export default ProtectedRoutes
