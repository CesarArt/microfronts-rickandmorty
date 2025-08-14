import { BrowserRouter } from "react-router-dom";
import MainRoutes from "../route/main-routes";

export function MainLayoutPage() {
    return (
        <BrowserRouter>
            <MainRoutes />
        </BrowserRouter>
    );
}