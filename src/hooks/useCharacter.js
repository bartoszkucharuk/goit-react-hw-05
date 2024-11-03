import { useEffect, useState } from "react";
import { fetchCharacter } from "../api/characters";

export const useCharacter = (id) => {
    const [character, setCharacter] = useState(null);

    useEffect(() => {
        const getCharacter = async () => {
        const character = await fetchCharacter(id);
        setCharacter(character);
        };
        getCharacter()
    }, [])

    return character;
};