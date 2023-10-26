import { Card, Button, ButtonLink } from "../ui";
import { useCharacters } from "../../context/CharactersProvider";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export function CharacterCard({ character }) {
  const { deleteCharacter } = useCharacters();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteCharacter(user._id, character._id, user.token); 
    navigate("/characters");
  }

  return (
    <Card>           
      <header className="flex  gap-x-5 justify-between">
        <h1 className="text-3xl font-bold gap-x-5 items-center">{character.name}</h1>
        <div className="flex gap-x-2 items-center">
          <Button onClick={handleDelete}>Delete</Button>
          <ButtonLink to={`/characters/character/${character._id}`}>Edit</ButtonLink>
        </div>
      </header> 
    </Card>
  );
}