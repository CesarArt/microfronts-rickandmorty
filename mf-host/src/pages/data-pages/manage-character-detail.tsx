import { lazy, Suspense } from "react";
import EmptyState from "../../components/emptyState";
import ErrorBoundary from "../../components/ErrorBoundary";
import { useNavigate } from "react-router-dom";
const RemoteCharacterDetail = lazy(() => import('mf_character_detail/CharacterDetail'));

const ManageCharacterDetailPage = () => {
    const navigate = useNavigate();

    const backAction = () => {
        navigate("/characters")
    }
    return (
        <div className="w-full h-full">
            <ErrorBoundary fallback={<EmptyState />}>
                <Suspense fallback={<div>Loading...</div>}>
                    <RemoteCharacterDetail action={backAction} />
                </Suspense>
            </ErrorBoundary>
        </div>
    )
};

export default ManageCharacterDetailPage;