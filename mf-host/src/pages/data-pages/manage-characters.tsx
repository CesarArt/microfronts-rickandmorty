import { lazy, Suspense } from "react";
import EmptyState from "../../components/emptyState";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useNavigate } from "react-router-dom";
import type { Character } from "../../types/character";
const RemoteCharacters = lazy(() => import('mf_characters/Characters'));

const ManageCharactersPage = () => {
    const navigate = useNavigate();

    const selectetedCharacter = (character: Character) => {
        navigate(`/character/detail/${character.id}`)
    }

    return (
        <div className="w-full h-full">
            <ErrorBoundary fallback={<EmptyState />}>
                <Suspense fallback={<div>Loading...</div>}>
                    <RemoteCharacters action={selectetedCharacter} />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
};

export default ManageCharactersPage;