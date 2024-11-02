import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/characters";

export const useCharacters = () => {
    const [charactersList, setCharactersList] = useState([]);

    useEffect(() => {
        const getCharacters = async () => {
        const characters = await fetchCharacters();
        setCharactersList(characters);
        };
        getCharacters()
    }, [])

    return charactersList;
};