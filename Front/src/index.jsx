/**
 * @module index
 * @see {@link external:createRoot}
 * @see {@link external:RouterProvider}
 */
import React from 'react';
import ReactDOM from "react-dom/client";
import {createHashRouter, RouterProvider} from "react-router-dom";
import './styles/index.css';
import App from './pages/App.jsx';
import ErrorPage from "./pages/ErrorPage.jsx";
import Home from './pages/Home.jsx';
import Profile from './pages/Profile.jsx';

/**
 * @external createHashRouter
 * @see {@link https://reactrouter.com/en/6.9.0/routers/create-hash-router}
 */
/**
 * Create the routes for the different pages of the app
 * @memberof module:index
 * @see {@link external:createHashRouter}
 */
const router = createHashRouter([
    {
        path: "/",
        basename: "/P12_TAYLOR_Heather",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home/>
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


/**
 * @external createRoot
 * @see {@link https://react.dev/reference/react-dom/client/createRoot}
 */
/**
 * @external RouterProvider
 * @see {@link https://reactrouter.com/en/6.9.0/routers/router-provider}
 */
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
