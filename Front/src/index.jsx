import * as React from 'react';
import * as ReactDOM from "react-dom/client";
import './styles/index.css';
import {createHashRouter, RouterProvider} from "react-router-dom";
import {SportSeeAPIMocked} from './mocks/services/MockedService.js';

import App from './pages/App.jsx';
import ErrorPage from "./pages/ErrorPage.jsx";
import Profile from './pages/Profile.jsx';

const router = createHashRouter([
    {
        path: "/",
        basename: "/P12_TAYLOR_Heather",
        element: <App userId={12} service={SportSeeAPIMocked}/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <div>Accueil</div>
            },
            {
                path: "/profil/user/:id",
                element: <Profile/>
            },   
            {
                path: "/reglage",
                element: <div>Réglage</div>
            },
            {
                path: "/communaute",
                element: <div>Communauté</div>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
