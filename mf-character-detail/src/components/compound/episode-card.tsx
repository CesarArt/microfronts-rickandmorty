import { useEpisode } from "../../hooks/useEpisode";

interface EpisodeCardProps {
    episodeApi: string;
}

export const EpisodeCard = ({ episodeApi }: EpisodeCardProps) => {
    const { episode } = useEpisode(episodeApi);

    return (
        <div className="bg-slate-100 p-2 rounded-2xl">
            <div className="flex flex-col gap-3">
                <p className="text-[12px] text-slate-700">{episode?.name}</p>
                <p className="text-[11px] text-slate-600">{episode?.episode}</p>
                <p className="text-[10px] text-slate-500">{episode?.air_date}</p>
            </div>
        </div>
    );
};