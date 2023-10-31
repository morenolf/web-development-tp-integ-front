import { ClothCard } from "../characters/ClothCard";

export function CharactersClothCard({ character }) {
  return (
    <div>       
      <h1 className="text-3xl font-bold"> { character.name } </h1>
      <ClothCard clothUrl={character.head} />
      <ClothCard clothUrl={character.body} />
      <ClothCard clothUrl={character.legs} />
      <ClothCard clothUrl={character.feet} />
    </div>
  );
}