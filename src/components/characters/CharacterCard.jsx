import { Card, Button, ButtonLink } from "../ui";
import { useCharacters } from "../../context/CharactersProvider";
import { Navigate } from "react-router-dom";

export function CharacterCard({ character }) {
  const { deleteCharacter } = useCharacters();
  const handleEdit = () => {
    Navigate()
  }

  return (
    <Card>           
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{character.name}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={() => deleteCharacter(character._id)}>Delete</Button>
          <ButtonLink to={`/characters/character/${character._id}`}>Edit</ButtonLink>
        </div>
      </header> 
    </Card>
  );
}