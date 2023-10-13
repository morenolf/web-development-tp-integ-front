import { BrowserRouter, Routes, Route } from "react-router-dom"

import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import CharactersPage from './pages/CharactersPage'
import ProtectedRoutes from './ProtectedRoutes'
import { AuthProvider } from "./context/AuthProvider";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <AuthProvider>  
      <BrowserRouter>    
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route element = { <ProtectedRoutes/> } >
            <Route path="/characters" element={<CharactersPage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}
