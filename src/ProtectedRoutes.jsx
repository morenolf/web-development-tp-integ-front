import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './context/AuthProvider'

function ProtectedRoutes() {
    const { isAuthenticated } = useAuth()

    if (!isAuthenticated) return <Navigate to='/login' replace/>

    return (
      <Outlet/>
    )
  }
  
  export default ProtectedRoutes