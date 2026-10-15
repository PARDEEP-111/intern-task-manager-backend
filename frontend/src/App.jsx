import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { Route, Routes, Navigate } from "react-router-dom"
import ProtectedRoutes from "./components/ProtectedRoutes"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        } />

      </Routes>
    </div>
  )
}

export default App
