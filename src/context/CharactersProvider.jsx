import { createContext, useContext, useState, useEffect } from "react";
import {
  createCharacterRequest,
  deleteCharacterRequest,
  getCharactersRequest,
  getCharacterRequest,
  updateCharacterRequest,
  getClothRequest,
  getTopCharactersRequest
} from "../api/characters";

const CharactersContext = createContext();
  
  export const useCharacters = () => {
    const context = useContext(CharactersContext);
    if (!context) throw new Error("useCharacters must be used within a CharactersProvider");
    return context;
  };

  export function CharactersProvider({ children }) {
    const [errors, setErrors] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [topCharacters, setTopCharacters] = useState([]);

    useEffect(() => {
      if (errors.length > 0) {
        const timer = setTimeout(() => {
          setErrors([]);
        }, 5000);
        return () => clearTimeout(timer);
      }
    }, [errors]);

    const getCharacters = async (userId, token) => {
      const res = await getCharactersRequest(userId, token);
      setCharacters(res.data);
    };
  
    const deleteCharacter = async (id, userId, token) => {
      try {
       const resp = await deleteCharacterRequest(id, userId, token);
       
      } catch (error) {
        console.log(error);
      }
    };
  
    const createCharacter = async (character, userId, token) => {
      try {
        const res = await createCharacterRequest(character, userId, token);
      } catch (error) {
        console.log(error);
        setErrors(error.response.data.message);
      }
    };
  
    const getCharacter = async (id, token) => {
      try {
        const res = await getCharacterRequest(id, token);
        return res;
      } catch (error) {
        console.error(error);
      }
    };
  
    const updateCharacter = async (id, character, token) => {
      try {
        await updateCharacterRequest(id, character, token);
      } catch (error) {
        console.error(error);
      }
    };

    const getCloth = async (type, paging, token) => {
      try {
        const res = await getClothRequest(type, paging, token);
        return res;
      } catch (error) {
        console.error(error);
      }
    };
    
    const getTopCharacters = async () => {
      const res = await getTopCharactersRequest();
      setTopCharacters(res.data);
    };
    
  
    return (
      <CharactersContext.Provider
        value={{
          errors,
          characters,
          topCharacters,
          getCharacters,
          deleteCharacter,
          createCharacter,
          getCharacter,
          updateCharacter,
          getCloth,
          getTopCharacters
        }}
      >
        {children}
      </CharactersContext.Provider>
    );
  }