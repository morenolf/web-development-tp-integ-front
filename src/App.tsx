import { BrowserRouter, Routes, Route } from "react-router-dom"

import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProtectedRoutes from './ProtectedRoutes'
import { TopCharactersPage }  from './pages/Character/TopCharactersPage'
import { CharactersPage }  from './pages/Character/CharactersPage'
import { AuthProvider } from "./context/AuthProvider";
import { CharactersProvider } from "./context/CharactersProvider";
import { CharacterFormPage } from "./pages/Character/CharacterFormPage";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <AuthProvider>  
      <CharactersProvider>
          <BrowserRouter>    
            <Navbar/>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />
              <Route path="/characters/top/" element={<TopCharactersPage/>} />     
              <Route element = { <ProtectedRoutes/> } >
                <Route path="/characters" element={<CharactersPage/>} />  
                <Route path="/characters/add-character/:id" element={<CharacterFormPage/>} />     
                <Route path="/characters/character/:id" element={<CharacterFormPage/>} />     
              </Route>
            </Routes>
          </BrowserRouter>
      </CharactersProvider>
    </AuthProvider>
  )
}
