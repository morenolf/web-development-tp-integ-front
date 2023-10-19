import { CreateCharacterProvider } from '../../context/CharacterPaginationProvider'
import { ClothCard } from '../../components/characters/ClothCard'
import { PaginationPage } from './PaginationPage'

export function CharacterPaginationPage({type}) {
  const { pages, totalPages, currentPage, setCurrentPage } = CreateCharacterProvider(type);

  return (
    <div>
        <div className="grid grid-cols-3 gap-10">
            {pages.map( page => {
                    return <ClothCard key={page.id} {...page} />;
             })
            }
        </div>
        <div>
            <PaginationPage totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage}  />
        </div>
    </div>
  )
}
