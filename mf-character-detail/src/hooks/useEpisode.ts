import { useState, useEffect } from 'react';
import type { Episode } from '../types/episode';

export const useEpisode = (api: string) => {
    const [episode, setEpisode] = useState<Episode>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchEpisode = async (id: string): Promise<Episode | null> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${id}`);
            if (!response.ok) throw new Error('Episode not found');
            const data: Episode = await response.json();
            setEpisode(data)
            return data;
        } catch (err) {
            setEpisode(undefined)
            setError(err instanceof Error ? err.message : 'Unknown error occurred');
            return null;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (api == "") {
            setEpisode(undefined)
            return
        }
        fetchEpisode(api);
    }, [api]);

    return {
        episode,
        loading,
        error,
        fetchEpisode,
    };
};