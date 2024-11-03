import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter";

export default function CharacterDetails() {

  const { id } = useParams();
  const character = useCharacter(id);

  if (character === null) {
    return <p>loading...</p>;
  }


  return (
    <div>
      {character.name}
      <img src={character.image} alt="" />
    </div>
  );
}
