import { useEffect } from "react";
import useState from 'react-usestateref'
import { useParams } from "react-router-dom";
import { ButtonFocus, Button, Card, Input, Label } from "../../components/ui";
import { useCharacters } from "../../context/CharactersProvider";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthProvider";
import { CharacterPaginationPage } from "./CharacterPaginationPage"

export function CharacterFormPage() {
  const { createCharacter, getCharacter, updateCharacter } = useCharacters(); 
  var [activeButton, setActiveButton] = useState("");

  const { user } = useAuth();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const clickedSubmit = async (value) => {
    try {
      if (params.id) {
        updateCharacter(params.id, {
          ...value,
        }, user.token);
      } else {
        createCharacter({
          ...value,
        }, user.token);
      }
      handleSubmit;
      // navigate("/tasks");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const loadCharacter = async () => {
      if (params.id) {
        const character = await getCharacter(params.id);
        setValue("name", character.name);
        setValue("headImage", character.cloth.head.url);
        //setValue("bodyImage", character.cloth.body.url)
        //setValue("legsImage", character.cloth.legs.url)
        //setValue("feetImage", character.cloth.feet.url)
      }
    };
    loadCharacter();
    //handleSubmit(onSubmit)
  }, []);

    return (
        <div className="h-[calc(100vh-100px)] flex items-center justify-center">
          <Card>
            <h1 className="text-3xl font-bold">Character</h1>
            <form onSubmit={handleSubmit(clickedSubmit)}>
              <Label htmlFor="charactername">Character Name:</Label>
              <Input
                type="text"
                name="charactername"
                placeholder="Write your character's name"
                {...register("charactername")}
                autoFocus
              />

              <h1 className="text-3xl font-bold">Please select your outfit</h1>
              <div>
                <ButtonFocus focus={activeButton == "head"} type="button" onClick={() => setActiveButton("head")} >Head</ButtonFocus>
                <ButtonFocus focus={activeButton == "body"} type="button" onClick={() => setActiveButton("body")} >Body</ButtonFocus>
                <ButtonFocus focus={activeButton == "legs"} type="button" onClick={() => setActiveButton("legs")} >Legs</ButtonFocus>
                <ButtonFocus focus={activeButton == "feet"} type="button" onClick={() => setActiveButton("feet")} >Feet</ButtonFocus>
              </div>
              
              {activeButton != "" && <CharacterPaginationPage type={activeButton} />}

              <Button type="submit">Submit</Button>
            </form>
          </Card>
        </div>
      );
}

