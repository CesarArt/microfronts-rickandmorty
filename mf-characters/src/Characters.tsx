import ListCharacters from "./components/listContainer";
import type { Character } from "./types/character";

interface CharactersProps {
  action?: (character: Character) => void
}
export default function Characters(props: CharactersProps) {

  const selectetedCharacter = (character: Character) => {
    if (props.action) {
      props.action(character)
    }
  }

  return (
    <div className="h-full w-full md:h-screen p-4 pt-7" >
      <ListCharacters action={selectetedCharacter} />
    </div>
  )
}
