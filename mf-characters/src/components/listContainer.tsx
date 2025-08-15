import { useEffect, useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import Button from "./core/button";
import { toast } from "sonner";
import { CharacterCard } from "./compound/CharacterCard";
import type { Character } from "../types/character";
import { SearchFilter } from "./compound/CharacterFilters";

export default function ListCharacters() {
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('all');
    const [speciesFilter, setSpeciesFilter] = useState('all');
    const [genderFilter, setGenderFilter] = useState('all');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

    const {
        characters,
        loading,
        error,
        currentPage,
        totalPages,
        fetchCharacters
    } = useCharacters();

    const handleCharacterClick = (character: Character) => {
        window.location.href = `/character/detail/${character.id}`;
    };

    // Debounce search term
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 500);

        return () => clearTimeout(timer);
    }, [searchTerm]);

    // Fetch characters when filters change
    useEffect(() => {
        fetchCharacters(
            1,
            debouncedSearchTerm || undefined,
            statusFilter,
            speciesFilter,
            genderFilter
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedSearchTerm, statusFilter, speciesFilter, genderFilter]);

    // Show error toast
    useEffect(() => {
        if (error) {
            toast.error('This is an error toast');
        }
    }, [error]);

    const handlePageChange = (page: number) => {
        fetchCharacters(
            page,
            debouncedSearchTerm || undefined,
            statusFilter,
            speciesFilter,
            genderFilter
        );
    };


    return (
        <div className="flex flex-col gap-1">
            <SearchFilter
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                statusFilter={statusFilter}
                onStatusFilterChange={setStatusFilter}
                speciesFilter={speciesFilter}
                onSpeciesFilterChange={setSpeciesFilter}
                genderFilter={genderFilter}
                onGenderFilterChange={setGenderFilter}
            />
            <main className="md:col-span-2 space-y-2">
                {loading ? (
                    <div className="flex items-center justify-center h-64">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                        <span className="ml-2 text-muted-foreground">Loading characters...</span>
                    </div>
                ) : characters.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-xl text-muted-foreground">No characters found</p>
                        <p className="text-sm text-muted-foreground mt-2">Try adjusting your search filters</p>
                    </div>
                ) : (
                    <>
                        {/* Character Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pb-8 pt-4 overflow-auto">
                            {characters.map((character) => (
                                <CharacterCard
                                    key={character.id}
                                    character={character}
                                    onClick={handleCharacterClick}
                                />
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex items-center justify-center gap-2 mt-2">
                                <p className="text-sm text-gray-600">
                                    Showing {characters.length} characters
                                </p>
                                <Button action={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage <= 1 || loading}>
                                    <ChevronLeft />
                                </Button>
                                <div className="flex items-center gap-1">
                                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                        const pageNum = currentPage - 2 + i;
                                        if (pageNum < 1 || pageNum > totalPages) return null;
                                        return (
                                            <Button action={() => handlePageChange(pageNum)} className="rounded-full w-[35px] h-[35px] cursor-pointer content-center text-center text-white"
                                                select={Boolean(pageNum === currentPage)}
                                            >
                                                {pageNum}
                                            </Button>
                                        );
                                    })}
                                </div>
                                <Button action={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage >= totalPages || loading}
                                >
                                    <ChevronRight />
                                </Button>
                                <p className="text-sm text-gray-600">
                                    Page {currentPage} of {totalPages}
                                </p>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    )
}