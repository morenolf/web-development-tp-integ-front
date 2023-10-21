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
  const [type, setType] = useState("");
  const [ character, setCharacter] = useState({
    name: "",
    head: "",
    body: "",
    legs: "",
    feet: "",
  });

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
      if (character.id) {
        updateCharacter(character.id, {
          ...value,
        }, user.token);
      } else {
        createCharacter(user._id, {
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
        setCharacter({...character, id: character._id,});
        setValue("charactername", character.name);
        //setValue("headImage", character.cloth.head.url);
        //setValue("bodyImage", character.cloth.body.url)
        //setValue("legsImage", character.cloth.legs.url)
        //setValue("feetImage", character.cloth.feet.url)
      }
    };
    loadCharacter();
    //handleSubmit(onSubmit)
  }, []);

    const handleChange = (e) => {
      setCharacter({
        ...character,
        [e.target.name]: e.target.value,
      });
    };

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
                onChange={handleChange}
                {...register("charactername")}
                autoFocus
              />

              <h1 className="text-3xl font-bold">Please select your outfit</h1>
              <div>
                <ButtonFocus focus={type == "head"} type="button" onClick={() => setType("head")} >Head</ButtonFocus>
                <ButtonFocus focus={type == "body"} type="button" onClick={() => setType("body")} >Body</ButtonFocus>
                <ButtonFocus focus={type == "legs"} type="button" onClick={() => setType("legs")} >Legs</ButtonFocus>
                <ButtonFocus focus={type == "feet"} type="button" onClick={() => setType("feet")} >Feet</ButtonFocus>
              </div>
              
              
              {type != "" && <CharacterPaginationPage type={type}/>}

              <Button type="submit"> {params.id ? "Save" : "Create"} </Button>
            </form>
          </Card>
        </div>
      );
}

