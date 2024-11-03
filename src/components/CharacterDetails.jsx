import { useParams } from "react-router-dom";

export default function CharacterDetails() {

const {id} = useParams();
  return (
    <div>Character Details - {id} </div>
  )
}
