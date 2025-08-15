import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './private-route';
import { LoginPage } from '../pages/login';
import ManageCharactersPage from '../pages/data-pages/manage-characters';
import EmptyState from '../components/emptyState';
import ManageCharacterDetailPage from '../pages/data-pages/manage-character-detail';


function MainRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={
                <PrivateRoute>
                   <EmptyState/>
                </PrivateRoute>
            }/>
            <Route path="/characters" element={
                <PrivateRoute>
                    <ManageCharactersPage/>
                </PrivateRoute>
            }/>
            <Route path="/character/detail/:id" element={
                <PrivateRoute>
                    <ManageCharacterDetailPage/>
                </PrivateRoute>
            }/>
        </Routes>
    )
}
export default MainRoutes;
