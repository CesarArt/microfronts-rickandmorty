import type { Character } from "../../types/character";
import Badge from "../core/badge";

interface CharacterCardProps {
  character: Character;
  onClick: (character: Character) => void;
}

export const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'bg-green-600 text-white';
      case 'dead':
        return 'bg-rose-500 text-white';
      default:
        return 'bg-zinc-500 text-gray-50';
    }
  };

  return (
    <div
      className="group cursor-pointer bg-gradient-card border-1 border-gray-300 hover:border-sky-600/30 hover:shadow-sky-600/50 transition-all duration-300 overflow-hidden rounded-lg bg-gray-200 text-card-foreground shadow-xl/20 inset-shadow-sm inset-shadow-indigo-500/50"
      onClick={() => onClick(character)}
    >
      <div className="p-0 group-hover:scale-102">
        <div className="relative justify-items-center bg-gray-100">
          <div className="h-15"></div>
          <img
            src={character.image}
            alt={character.name}
            className="w-20 absolute top-1 left-4 md:left-27 object-cover rounded-full items-center text-center transition-transform duration-300  border-2 border-gray-200"
          />
          <div className="absolute top-3 right-3 ">
            <Badge classNameAux={getStatusColor(character.status)} text={character.status} />
          </div>
        </div>

        <div className="p-4 pt-6">
          <h3 className="font-semibold text-base text-slate-500 group-hover:text-sky-500 transition-colors line-clamp-1">
            {character.name}
          </h3>

          <div className="space-y-1 text-sm text-gray-400">
            <p className="flex items-center gap-2">
              <span className="text-sky-600">Gender:</span>
              <span>{character.gender}</span>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-sky-600">Species:</span>
              <span>{character.species}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};