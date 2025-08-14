import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './private-route';
import { LoginPage } from '../pages/login';
import ManageCharactersPage from '../pages/data-pages/manage-characters';
import EmptyState from '../components/emptyState';


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
        </Routes>
    )
}
export default MainRoutes;
