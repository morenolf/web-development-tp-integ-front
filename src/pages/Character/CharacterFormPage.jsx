import { useEffect } from "react";
import useState from 'react-usestateref'
import { useParams } from "react-router-dom";
import { ButtonFocus, Button, Card, Input, Label, EmptyImage } from "../../components/ui";
import { useCharacters } from "../../context/CharactersProvider";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthProvider";
import { CharacterPaginationPage } from "./CharacterPaginationPage"
import { registerSchema } from "../../schemas/character";
import { zodResolver } from "@hookform/resolvers/zod";

export function CharacterFormPage() {
  const { errors: registerErrors, setErrors, createCharacter, getCharacter, updateCharacter } = useCharacters(); 
  const [type, setType] = useState("");
  const [characterCloth, setCharacterCloth] = useState({
    head: "empty.jpg",
    body: "empty.jpg",
    legs: "empty.jpg",
    feet: "empty.jpg",
  });
  
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
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const clickedSubmit = async (value) => {
    try {
      if (character.id) {
        updateCharacter(character.id, {
          ...value,
        }, user.token);
      } else {
        createCharacter({
          ...value,
        }, user._id, user.token);
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
        setValue("name", character.name);
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
    setCharacter(({ ...character, [e.target.name]: e.target.value }));
  }
  const handlePageChange = (url) => {
    setCharacterCloth(({ ...characterCloth, [type]: url }))
  }
  
/*
  useEffect(() => {
    console.log("cloth change");
    setCharacterCloth({ ...characterCloth, [type]: src });
  }, [this.CharacterPaginationPage]);
*/
    return (
        <div className="flex items-center justify-center">
          <Card>
            {registerErrors.map((error, i) => (
              <Message message={error} key={i} />
            ))}
            <h1 className="text-3xl font-bold">Character</h1>
            <form onSubmit={handleSubmit(clickedSubmit)}>
              <Label htmlFor="name">Character Name:</Label>
              <Input
                type="text"
                name="name"
                placeholder="Write your character's name"
                onChange={handleChange}
                {...register("name")}
                autoFocus
              />
              
              {errors.name?.message && (
                <p className="text-red-500">{errors.name?.message}</p>
              )}
              <h1 className="text-3xl font-bold">Please select your outfit</h1>
              <div>
                <ButtonFocus focus={type == "head"} type="button" onClick={() => setType("head")} >Head</ButtonFocus>
                <ButtonFocus focus={type == "body"} type="button" onClick={() => setType("body")} >Body</ButtonFocus>
                <ButtonFocus focus={type == "legs"} type="button" onClick={() => setType("legs")} >Legs</ButtonFocus>
                <ButtonFocus focus={type == "feet"} type="button" onClick={() => setType("feet")} >Feet</ButtonFocus>
              </div>
              
              {(errors.head?.message) && 
               ((<p className="text-red-500">{errors.head?.message}</p>) || (errors.body?.message) && 
                (<p className="text-red-500">{errors.body?.message}</p>) || (errors.legs?.message) && 
                (<p className="text-red-500">{errors.legs?.message}</p>) || (errors.feet?.message) && 
                (<p className="text-red-500">{errors.feet?.message}</p>))}

              {type != "" && <CharacterPaginationPage onChange={handlePageChange} type={type}/>}

              <Button type="submit"> {params.id ? "Save" : "Create"} </Button>
            </form>
          </Card>
          <Card>
              <h1 className="text-3xl font-bold">Cloth</h1>
              <div className="flex justify-center items-center flex-col gap-4 bg-lightGray rounded-lg py-10" key={'head'}>
                      <img className="w-24 p-2 border-[2px] border-solid border-purple rounded-full object-cover" src= { `../images/${characterCloth.head}` } />
              </div>
              <div className="flex justify-center items-center flex-col gap-4 bg-lightGray rounded-lg py-10" key={'body'}>
                      <img className="w-24 p-2 border-[2px] border-solid border-purple rounded-full object-cover" src= { `../images/${characterCloth.body}` } />
              </div>
              <div className="flex justify-center items-center flex-col gap-4 bg-lightGray rounded-lg py-10" key={'legs'}>
                      <img className="w-24 p-2 border-[2px] border-solid border-purple rounded-full object-cover" src= { `../images/${characterCloth.legs}` } />
              </div>
              <div className="flex justify-center items-center flex-col gap-4 bg-lightGray rounded-lg py-10" key={'feet'}>
                      <img className="w-24 p-2 border-[2px] border-solid border-purple rounded-full object-cover" src= { `../images/${characterCloth.feet}` } />
              </div>
          </Card>
        </div>
      );
}

