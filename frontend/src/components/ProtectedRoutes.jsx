
import { Navigate, } from "react-router-dom"

const ProtectedRoutes = ({ children }) => {

  const Token = localStorage.getItem("token")
  if (!Token) {
    return <Navigate to="/login" replace />
  }

  return children;
};

export default ProtectedRoutes
