import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./pages/HomePage";
import TravelList from "./pages/TravelList";
import DestinationList from "./pages/DestinationList";
import DestinationDetails from "./pages/DestinationDetails";
import AddTravel from "./pages/AddTravel";
import EditTravel from "./pages/EditTravel";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
             {
            path: "/",
            element: <HomePage/>,
        },
        {
            path: "/TravelList",
            element: <TravelList />
        },
        {
            path: "/destinationList",
            element: <DestinationList/>
        },
        {
            path: "/destinationDetails/:name",
            element: <DestinationDetails/>
        },
        {
            path: "/addTravel",
            element: <AddTravel />
        },
        {
            path: "/editTravel/:destination",
            element: <EditTravel />
        }
       ],
    },
]);

export function AppRouter() {
    return <RouterProvider router={router} />;
}