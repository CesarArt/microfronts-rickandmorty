import { useState, useEffect } from 'react';
import type { Character } from '../types/character';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

export const useCharacter = (id: string) => {
    const [character, setCharacter] = useState<Character>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchCharacterById = async (id: number): Promise<Character | null> => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/character/${id}`);
            if (!response.ok) throw new Error('Character not found');
            const data: Character = await response.json();
            setCharacter(data)
            return data;
        } catch (err) {
            setCharacter(undefined)
            setError(err instanceof Error ? err.message : 'Unknown error occurred');
            return null;
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (id == "") {
            setCharacter(undefined)
            return
        }
        fetchCharacterById(Number(id));
    }, [id]);

    return {
        character,
        loading,
        error,
        fetchCharacterById,
    };
};