import { useEffect } from "react";
import { CharacterCard } from "../../components/characters/CharacterCard";
import { BsFillPersonFill } from "react-icons/bs";
import { useCharacters } from "../../context/CharactersProvider";
import { useAuth } from "../../context/AuthProvider";
import { ButtonLink } from "../../components/ui";


export function CharactersPage() {
  const { user } = useAuth();
  const { characters, getCharacters } = useCharacters();

  useEffect(() => {
    getCharacters(user._id, user.token);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className="text-3xl font-bold gap-x-2 ">Characters</h1>
        {characters.length === 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="flex gap-x-2 items-center">
              <BsFillPersonFill className="text-6xl text-gray-400 m-auto my-2" />
              <h1 className="text-1xl font-bold"> There are no characters, please create one </h1>              
            </div>
            <div className="flex gap-x-2 items-center justify-end"> 
              <ButtonLink to="/characters/add-character/-1">New</ButtonLink>
            </div>
            
          </div>
        )}        
        <div className="grid gap-2">
          {characters.map((character) => (
            <CharacterCard character={character} key={character._id} />
          ))}
        </div>
      </div>
    </div>
  );
}