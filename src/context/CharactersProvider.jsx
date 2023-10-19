import { createContext, useContext, useState } from "react";
import {
  createCharacterRequest,
  deleteCharacterRequest,
  getCharactersRequest,
  getCharacterRequest,
  updateCharacterRequest,
  getClothRequest
} from "../api/characters";

const CharactersContext = createContext();

  export const useCharacters = () => {
    const context = useContext(CharactersContext);
    if (!context) throw new Error("useCharacters must be used within a CharactersProvider");
    return context;
  };

  export function CharactersProvider({ children }) {
    const [characters, setCharacters] = useState([]);

    const getCharacters = async (userId, token) => {
      const res = await getCharactersRequest(userId, token);
      setCharacters(res.data);
    };
  
    const deleteCharacter = async (id, token) => {
      try {
        const res = await deleteCharacterRequest(id, token);
        if (res.status === 204) setCharacters(characters.filter((character) => character._id !== id));
      } catch (error) {
        console.log(error);
      }
    };
  
    const createCharacter = async (character, token) => {
      try {
        const res = await createCharacterRequest(character, token);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const getCharacter = async (id, token) => {
      try {
        const res = await getCharacterRequest(id, token);
        return res.data;
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
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <CharactersContext.Provider
        value={{
          characters,
          getCharacters,
          deleteCharacter,
          createCharacter,
          getCharacter,
          updateCharacter,
          getCloth
        }}
      >
        {children}
      </CharactersContext.Provider>
    );
  }