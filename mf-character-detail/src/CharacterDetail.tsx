import { ArrowLeft, MapPin } from "lucide-react";
import type { Character } from "./types/character";
import { EpisodeCard } from "./components/compound/episode-card";


interface CharacterDetailProps {
    character: Character;
    onBack: () => void;
}

export const CharacterDetail = ({ character, onBack }: CharacterDetailProps) => {
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
        <div className="h-full">
            <div className="container mx-auto px-4 py-4">
                <div onClick={onBack} className="flex items-center">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Characters
                </div>
                <div className="text-3xl font-bold text-foreground">
                    {character.name}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8">
                    <div className="flex flex-col gap-4 lg:col-span-8">
                        <div className="w-full flex flex-col border-2 gap-2 border-slate-200 p-2 rounded-2xl shadow-xl">
                            <p>Basic information</p>
                            <div className="grid md:grid-cols-2 gap-2">
                                <div className="bg-slate-100 p-2">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Origin</p>
                                            <p className="font-medium text-foreground">{character.origin.name}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-slate-100 p-2">
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-primary" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Last Location</p>
                                            <p className="font-medium text-foreground">{character.location.name}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="w-full flex flex-col border-2 gap-2 border-slate-200 p-2 rounded-2xl shadow-xl">
                            <span className="flex gap-2">
                                <p>Episodes</p>
                                <p>({character.episode.length})</p>

                            </span>
                            <div className="grid md:grid-cols-2 gap-2 max-h-[825px] overflow-auto">
                                {character.episode.map((ep, idx) => {
                                    return (
                                        <EpisodeCard key={idx} episodeApi={ep} />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 lg:col-span-4">
                        <div className="w-full flex flex-col border-2 gap-2 border-slate-200 p-2 rounded-xl shadow-xl">
                            <p className="font-semibold">Statistics</p>
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between">
                                    <p className="text-sm text-slate-500">Episodes</p>
                                    <p className="text-sm text-black font-semibold">
                                        Appears in {character.episode.length} episode{character.episode.length !== 1 ? 's' : ''}
                                    </p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-sm text-slate-500">Species</p>
                                    <p className="text-sm text-black font-semibold">{character.species}</p>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-sm text-slate-500">Gender</p>
                                    <p className="text-sm text-black font-semibold">{character.gender}</p>
                                </div>
                            </div>
                        </div>
                        {/* Character Image */}
                        <div className="border-2 border-slate-200 p-2 rounded-xl shadow-xl">
                            <p className="font-semibold">Image</p>
                            <div className="p-2 justify-items-center">
                                <div className="relative w-[300px]">
                                    <img
                                        src={character.image}
                                        alt={character.name}
                                        className="w-full rounded-lg shadow-glow"
                                    />
                                    <div className={`absolute top-4 right-4 ${getStatusColor(character.status)} px-3 py-1 rounded-2xl`}>
                                        {character.status}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};