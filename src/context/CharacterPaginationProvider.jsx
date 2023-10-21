import { useEffect, useState } from "react";
import { useCharacters } from "./CharactersProvider";
import { useAuth } from "./AuthProvider";

export function CreateCharacterProvider({type}) {
    console.log("render create provider");
    const { user } = useAuth();
    const { getCloth } = useCharacters(); 
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [clothType, setClothType] = useState(type);

    const maxPages = 10;

    const fetchPages = async () => {
        const paging = {
            page: currentPage,
            limit: maxPages
        } 
        try {
            const res = await getCloth(clothType, paging, user.token);        
            setTotalPages(res.totalPages);
            setPages(res.cloth);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=> {
        fetchPages();
    }, [currentPage, clothType]);

    return {
        clothType,
        pages,
        totalPages,
        currentPage,
        setCurrentPage,
        setClothType
    }
}