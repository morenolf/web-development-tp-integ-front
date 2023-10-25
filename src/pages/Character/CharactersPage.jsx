import { useEffect } from "react";
import { CharacterCard } from "../../components/characters/CharacterCard";
import { BsFillPersonFill } from "react-icons/bs";
import { useCharacters } from "../../context/CharactersProvider";
import { useAuth } from "../../context/AuthProvider";
import { ButtonLink } from "../../components/ui/ButtonLink";


export function CharactersPage() {
  const { user } = useAuth();
  const { characters, getCharacters } = useCharacters();

  useEffect(() => {
    getCharacters(user._id, user.token);
  }, []);

  return (
    <>
      {characters.length === 0 && (
        //<div className="flex justify-center items-center p-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
          <div>
            <BsFillPersonFill className="text-6xl text-gray-400 m-auto my-2" />
            <h1 className="text-6xl text-gray-400 m-auto my-2"> There are no characters, please create one </h1>
            <ButtonLink to="/create">New</ButtonLink>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {characters.map((character) => (
          <CharacterCard character={character} key={character._id} />
        ))}
      </div>
    </>
  );
}