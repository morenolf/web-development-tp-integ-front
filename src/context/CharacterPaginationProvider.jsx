import { useEffect, useState } from "react";
import { useCharacters } from "./CharactersProvider";

export function CreateCharacterProvider({type}) {
    const { getCloth } = useCharacters(); 
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = 10;

    const fetchPages = async (type) => {
        const paging = {
            page: currentPage,
            limit: totalPages
        } 
        try {
            const res = await getCloth(type, paging, user.token);        
            setTotalPages(res.totalPages);
            setPages(res.cloth);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        fetchPages(type);
    }, [currentPage]);

    return (
        pages,
        totalPages,
        currentPage,
        setCurrentPage
    )
}