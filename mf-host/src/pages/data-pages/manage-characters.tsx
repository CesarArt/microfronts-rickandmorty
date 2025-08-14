import { lazy, Suspense } from "react";
import EmptyState from "../../components/emptyState";
import ErrorBoundary from "../../components/ErrorBoundary";
const RemoteCharacters = lazy(() => import('mf_characters/Characters'));

const ManageCharactersPage = () => {

    return (
        <div className="w-full h-full">
            <ErrorBoundary fallback={<EmptyState />}>
                <Suspense fallback={<div>Loading...</div>}>
                    <RemoteCharacters />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
};

export default ManageCharactersPage;