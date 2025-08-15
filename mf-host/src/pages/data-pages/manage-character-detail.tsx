import { lazy, Suspense } from "react";
import EmptyState from "../../components/emptyState";
import ErrorBoundary from "../../components/ErrorBoundary";
const RemoteCharacterDetail = lazy(() => import('mf_character_detail/CharacterDetail'));

const ManageCharacterDetailPage = () => {
    return (
        <div className="w-full h-full">
            <ErrorBoundary fallback={<EmptyState />}>
                <Suspense fallback={<div>Loading...</div>}>
                    <RemoteCharacterDetail />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
};

export default ManageCharacterDetailPage;