import { useState, useEffect } from 'react';
import type { Character, CharacterResponse } from '../types/character';

const API_BASE_URL = 'https://rickandmortyapi.com/api';

export const useCharacters = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchCharacters = async (
        page: number = 1,
        name?: string,
        status?: string,
        species?: string,
        gender?: string
    ) => {
        setLoading(true);
        setError(null);

        try {
            const params = new URLSearchParams({
                page: page.toString(),
            });

            if (name) params.append('name', name);
            if (status && status !== 'all') params.append('status', status);
            if (species && species !== 'all') params.append('species', species);
            if (gender && gender !== 'all') params.append('gender', gender);

            const response = await fetch(`${API_BASE_URL}/character?${params}`);

            if (!response.ok) {
                if (response.status === 404) {
                    setCharacters([]);
                    setTotalPages(1);
                    return;
                }
                throw new Error('Failed to fetch characters');
            }

            const data: CharacterResponse = await response.json();
            setCharacters(data.results);
            setTotalPages(data.info.pages);
            setCurrentPage(page);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Unknown error occurred');
            setCharacters([]);
        } finally {
            setLoading(false);
        }
    };

    const fetchCharacterById = async (id: number): Promise<Character | null> => {
        try {
            const response = await fetch(`${API_BASE_URL}/character/${id}`);
            if (!response.ok) throw new Error('Character not found');
            return await response.json();
        } catch (err) {
            console.error('Error fetching character:', err);
            return null;
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    return {
        characters,
        loading,
        error,
        currentPage,
        totalPages,
        fetchCharacters,
        fetchCharacterById,
    };
};