import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddNewHouse from "./Pages/AddNewHouse";
import HouseList, { loader as HouseListLoader } from "./Pages/HouseList";
import EditHouse, { loader as HouseDetailLoader } from "./Pages/EditHouse";
import "./App.css";
import Layout from "./Layouts/Layout";

export default function App() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "", element: <AddNewHouse /> },
      {
        path: "/house/:id",
        loader: HouseDetailLoader,
        element: <EditHouse />,
      },
      { path: "/house", loader: HouseListLoader, element: <HouseList /> },
    ],
  },
]);
