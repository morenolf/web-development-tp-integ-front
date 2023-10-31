import { useEffect, useState } from "react";
import { CharactersClothCard } from "../../components/characters/CharacterClothCard";
import { BsFillPersonFill } from "react-icons/bs";
import { useCharacters } from "../../context/CharactersProvider";
import { ButtonLink } from "../../components/ui";


export function TopCharactersPage() {
  const { topCharacters, getTopCharacters } = useCharacters();

  useEffect(() => {
    getTopCharacters();
  }, []);

  return (
    <div className="flex items-center justify-center">      
      <div className="bg-zinc-800 max-h-max p-10 rounded-md">   
        <h1 className="text-5xl font-bold gap-x-2 mb-5 text-center">¡Top characters!</h1>
        {topCharacters.length === 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="flex gap-x-2 items-center">
              <BsFillPersonFill className="text-6xl text-gray-400 m-auto my-2" />
              <h1 className="text-1xl font-bold"> Sorry... there are no characters. You can register and create one! </h1>              
            </div>
            <div className="flex gap-x-2 items-center justify-end"> 
              <ButtonLink to="/characters/add-character/-1">New</ButtonLink>
            </div>
          </div>
        )}        
        <div className="grid grid-flow-col gap-6">
          {topCharacters.map((character) => (
            <CharactersClothCard character={character} />
          ))}
        </div>
      </div>
    </div>
  );
}