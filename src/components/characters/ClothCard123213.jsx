export function ClothCard({ character }) {

  const handleClick = async () => {
    console.log("clicked image")
  }

  return (
    <Card>      
      <a href="https://unsplash.com/photos/YTmgx_ru39U" target="_blank" class="bg-white rounded h-full text-grey-darkest no-underline shadow-md">
        <h1 class="text-3xl p-6"> {character.name} </h1>
        <img class="w-full block rounded-b" src= { `../images/${character.url}` } onClick={handleClick(character.id)} />
      </a>
    </Card>
  );
}