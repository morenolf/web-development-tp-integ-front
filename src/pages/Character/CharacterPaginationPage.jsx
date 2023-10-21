import { CreateCharacterProvider } from '../../context/CharacterPaginationProvider'
import { PaginationPage } from './PaginationPage'

export function CharacterPaginationPage({type}) {
  const { pages, totalPages, currentPage, setCurrentPage, clothType, setClothType } = CreateCharacterProvider(type);  
  console.log("render pagination", type);
  if (type != clothType) {
    setClothType(type);
  }
  return (
    <div>
        <div className="grid grid-cols-3 gap-10">
            {pages.map( page => {
                    //return <ClothCard key={page._id} {...page.url} />;
                    console.log("render page");
                    return <div className="flex justify-center items-center flex-col gap-4 bg-lightGray rounded-lg py-10" key={page._id}>      
                      <img className="w-24 p-2 border-[2px] border-solid border-purple rounded-full object-cover" src= { `../images/${page.url}` } />
                    </div>;
             })
            }
        </div>
        <div>
            <PaginationPage totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage}  />
        </div>
    </div>
  )
}