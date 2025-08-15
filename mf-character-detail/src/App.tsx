import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useCharacter } from "./hooks/useCharacter";
import { CharacterDetail } from "./CharacterDetail";


interface AppProps {
  action?: () => void
}
function App(props: AppProps) {

  const { id } = useParams();
  const [characterIdToFound, setCharacterIdToFound] = useState('');

  const {
    character,
  } = useCharacter(characterIdToFound);


  const goTo = () => {
    if (props.action)
      props.action()
  }
  useEffect(() => {
    if (!id) {
      const data = window.location.pathname;
      const idUrl = data.split("/").pop();
      if (idUrl) {
        setCharacterIdToFound(idUrl)
        console.log("id: ", idUrl)
      }
    }
  }, [id])

  return (
    <>{
      character ?
        <CharacterDetail character={character} onBack={goTo} /> :
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No character found</p>
        </div>
    }
    </>
  )
}

export default App
