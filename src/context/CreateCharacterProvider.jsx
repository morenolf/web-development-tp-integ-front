import { createContext, useContext, useState } from "react";
import { useCharacters } from "../context/CharactersProvider";

const CreateCharacterContext = createContext();

export const useCreateCharacter = () => {
  const context = useContext(CreateCharacterContext);
  if (!context) throw new Error("useCharacters must be used within a CreateCharacterContext");
  return context;
};

export function CreateCharacterProvider({ children }) {

      return (
        <CreateCharacterContext.Provider
          value={{     
            characterForm,
            handleChange
          }}
        >
          {children}
        </CreateCharacterContext.Provider>
      );
}