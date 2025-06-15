import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "../components";
import Applayout from "../layout/Applayout";
import Index from "../sections/Index";


export const routeConfig = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Index />,
            },
        ]
    },
]);