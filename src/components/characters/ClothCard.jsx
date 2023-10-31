export const ClothCard = ({name, clothUrl}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-4 bg-lightGray rounded-lg py-1">
      <img className="w-24 p-2 border-[2px] border-solid border-purple rounded-full object-cover" src= { `/images/${clothUrl}` } />
    </div>
  );
}