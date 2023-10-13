import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './context/AuthProvider'

function ProtectedRoutes() {
    const { user, isAuthenticated } = useAuth()

    if (!isAuthenticated) return <Navigate to='/login' replace/>

    return (
      <Outlet/>
    )
  }
  
  export default ProtectedRoutes