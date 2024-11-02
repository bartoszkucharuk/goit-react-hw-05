import { useCharacters } from "../hooks/useCharacters"

export default function CharactersList() {
    const charactersList = useCharacters();
    return (
        <div>
            {charactersList.map((character) => (
                <p key={character.id}>{character.name}</p>
            ))}
        </div>
    );
}
