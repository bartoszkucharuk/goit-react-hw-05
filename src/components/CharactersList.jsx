import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters"

export default function CharactersList() {
    const charactersList = useCharacters();
    return (
        <div>
            {charactersList.map((character) => (
                <Link to={`/character/${character.id}`} key={character.id}>{character.name} - {character.id}
                < br /></Link>
            ))}
        </div>
    );
}
