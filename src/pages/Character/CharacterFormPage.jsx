import { useEffect } from "react";
import useState from 'react-usestateref'
import { useNavigate, useParams } from "react-router-dom";
import { ButtonFocus, Button, Card, Input } from "../../components/ui";
import { useCharacters } from "../../context/CharactersProvider";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthProvider";
import { CharacterPaginationPage } from "./CharacterPaginationPage"
import { ClothCard } from "../../components/characters/ClothCard";
import { registerSchema } from "../../schemas/character";
import { zodResolver } from "@hookform/resolvers/zod";

export function CharacterFormPage() {
    const params = useParams();
    const { user } = useAuth();
    const navigate = useNavigate();
    const { errors: registerErrors, setErrors, createCharacter, getCharacter, updateCharacter } = useCharacters(); 
    const [type, setType] = useState("");
    const [characterCloth, setCharacterCloth] = useState({
      head: "empty.jpg",
      body: "empty.jpg",
      legs: "empty.jpg",
      feet: "empty.jpg",
    });
  
    const [ character, setCharacter] = useState({
      _id: "",
      name: "",
      head: "",
      body: "",
      legs: "",
      feet: "",
    });

  
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
        if (character._id != "") {
          updateCharacter(character._id, {
            ...character,
            head: characterCloth.head,
            body: characterCloth.body,
            legs: characterCloth.legs,
            feet: characterCloth.feet,
          }, user.token);
        } else {
          createCharacter(
            { ...character,
              head: characterCloth.head,
              body: characterCloth.body,
              legs: characterCloth.legs,
              feet: characterCloth.feet,
            }, user._id, user.token);
        }
        handleSubmit;
        navigate("/characters");
      } catch (error) {
        console.log(error);
      }
    }

    const loadCharacter = async (value) => {        
      if (params.id && params.id != -1) {
        const characterResp = await getCharacter(params.id, user.token);
        setCharacter({...character, 
          _id: characterResp._id,
          name: characterResp.name,
          head: characterResp.head,
          body: characterResp.body,
          legs: characterResp.legs,
          feet: characterResp.feet,
        });
        setCharacterCloth({...characterCloth, 
          head: characterResp.head,
          body: characterResp.body,
          legs: characterResp.legs,
          feet: characterResp.feet,
        });
      }
    };
    useEffect(() => {
      loadCharacter();
    }, []);


    useEffect(() => {
      if (params.id == -1){
        setCharacter({...character, 
          _id: "",
          name: "",
          head: "",
          body: "",
          legs: "",
          feet: "",
        });
        setCharacterCloth({...characterCloth, 
          head: "empty.jpg",
          body: "empty.jpg",
          legs: "empty.jpg",
          feet: "empty.jpg",
        });
      }
    }, [params.id]);

    const handleChange = (e) => {
      setCharacter(({ ...character, [e.target.name]: e.target.value }));
    }

    const handlePageChange = (url) => {
      setCharacterCloth(({ ...characterCloth, [type]: url }))
    }

    return (
        <div className="flex items-center justify-center">
          <Card>
            <h1 className="text-6xl font-bold text-center gap-2">Character</h1>

            <form className="gap-5" onSubmit={clickedSubmit}>
            
            <div>
                <h1 className="text-3xl font-bold gap-5">Name: </h1>
                <Input
                  type="text"
                  name="name"
                  value={character.name}
                  placeholder="Write your character's name"
                  className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md"
                  onChange={handleChange}
                  autoFocus
                />
            </div>
              <div className="flex gap-x-2 items-center justify-center">
                <ButtonFocus focus={type == "head"} type="button" onClick={() => setType("head")} >Head</ButtonFocus>
                <ButtonFocus focus={type == "body"} type="button" onClick={() => setType("body")} >Body</ButtonFocus>
                <ButtonFocus focus={type == "legs"} type="button" onClick={() => setType("legs")} >Legs</ButtonFocus>
                <ButtonFocus focus={type == "feet"} type="button" onClick={() => setType("feet")} >Feet</ButtonFocus>
              </div>

              <ClothCard clothUrl={characterCloth.head}/>
              <ClothCard clothUrl={characterCloth.body}/>
              <ClothCard clothUrl={characterCloth.legs}/>
              <ClothCard clothUrl={characterCloth.feet}/>

              <div className="flex gap-x-2 items-center justify-end">
                <Button type="button" onClick={() => navigate("/characters")}> Cancel </Button>
                <Button type="submit"> {params.id ? "Save" : "Create"} </Button>
              </div>
            </form>
          </Card>
          {type != "" && 
            <Card>
              <CharacterPaginationPage onChange={handlePageChange} type={type}/>
            </Card>
          }
        </div>
      );
}

